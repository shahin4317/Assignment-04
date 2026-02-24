// count 
let Interviewlist = [];
let Rejectedlist = []
// total , Interview, RejectedCount 
let total = document.getElementById('total');
let RejectedCount = document.getElementById('RejectedCount');
let InterviewCount = document.getElementById('InterviewCount');

// use to function for tottal
const AllCardSection = document.getElementById('allCards')
const mainContainer = document.querySelector('main')
const filtersection = document.getElementById('filtered-section')

// recived btn
const allFilterBtn = document.getElementById('all-filter-btn')
const InterviewFilterBtn = document.getElementById('Interview-filter-btn')
const RejectedFilterBtn = document.getElementById('Rejected-filter-btn')

// function

function claculateCount() {
    total.innerText = AllCardSection.children.length;
    InterviewCount.innerText =  InterviewCount.length
    RejectedCount.innerText = RejectedCount.length

}
claculateCount()
// toggoling
function toggleStyle(id) {
    allFilterBtn.classList.add('bg-[#F1F2F4]', 'text-black')
    InterviewFilterBtn.classList.add('bg-[#F1F2F4]', 'text-black')
    RejectedFilterBtn.classList.add('bg-[#F1F2F4]', 'text-black')

    allFilterBtn.classList.remove('bg-black', 'text-white')
    InterviewFilterBtn.classList.remove('bg-black', 'text-white')
    RejectedFilterBtn.classList.remove('bg-black', 'text-white')

    const selected = document.getElementById(id)

    selected.classList.remove('bg-[#F1F2F4]', 'text-black')
    selected.classList.add('bg-black', 'text-white')

    if(id == 'Interview-filter-btn'){
        AllCardSection.classList.add('hidden')
        filtersection.classList.remove('hidden')
    }
    else if(id=='all-filter-btn'){
        AllCardSection.classList.remove('hidden');
        filtersection.classList.add('hidden')
    }
        
}


// clicked for addd

mainContainer.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('interview-btn'))
    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;
        const companyName =parenNode.querySelector('.companyName').innerText;
        const time = parenNode.querySelector('.time').innerText;
        const status= parenNode.querySelector('.status').innerText;
        const notes = parenNode.querySelector('.notes').innerText;
        parenNode.querySelector('.status').innerText = "Interviewed"
        const cardInfo = {
            companyName,
            time,
            status: "Interviewe",
            notes

        }

        const companyExist =Interviewlist.find(item => item.companyName == cardInfo.companyName)

        if (!companyExist) {
            Interviewlist.push(cardInfo)
        }
        renderInterviwe()

    }

})



function renderInterviwe() {
    filtersection.innerHTML = ''
    for (let interview of Interviewlist) {
        console.log(interview);

        let div = document.createElement('div')
        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `

        <div class="space-y-6">
        <div>
        <p class="companyName text-4xl">${interview.companyName}</p>
        <p class="jobName text-[#64748B]">React Native Developer </p>
        </div>
        <div class="flex gap-5">
        <p class="time text-[#64748B]">Remote• Full-time •$130,000 - $175,000</p>
        </div>
        <p class="status inline-block bg-[#EEF4FF] ">${interview.status}</p>
        <p class="notes text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
        <div class="flex gap-5">
        <button class="interview-btn border border-[#10B981]  text-[#10B981] px-4 py-2">interview</button>
        <button class="Rejected-btn border border-[#EF4444] text-[#EF4444] px-4 py-2">Rejected</button>
        </div>
        </div>
        `
        filtersection.appendChild(div)

    }
}











