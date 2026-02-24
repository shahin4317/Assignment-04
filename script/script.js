// count 
let Interviewlist = [];
let Rejectedlist = [];

// total , Interview, RejectedCount 
const total = document.getElementById('total');
const RejectedCount = document.getElementById('RejectedCount');
const InterviewCount = document.getElementById('InterviewCount');

    // card sections
const AllCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filtersection = document.getElementById('filtered-section');

        // filter buttons
const allFilterBtn = document.getElementById('all-filter-btn');
const InterviewFilterBtn = document.getElementById('Interview-filter-btn');
const RejectedFilterBtn = document.getElementById('Rejected-filter-btn');

    // count update function
function updateCount() {
    total.innerText = AllCardSection.children.length;
    InterviewCount.innerText = Interviewlist.length;
    RejectedCount.innerText = Rejectedlist.length;
}
updateCount();

                    // toggle filter buttons
function toggleStyle(id) {
    allFilterBtn.classList.add('bg-[#F1F2F4]', 'text-black');
    InterviewFilterBtn.classList.add('bg-[#F1F2F4]', 'text-black');
    RejectedFilterBtn.classList.add('bg-[#F1F2F4]', 'text-black');

    allFilterBtn.classList.remove('bg-black', 'text-white');
    InterviewFilterBtn.classList.remove('bg-black', 'text-white');
    RejectedFilterBtn.classList.remove('bg-black', 'text-white');
    const selected = document.getElementById(id);
    selected.classList.remove('bg-[#F1F2F4]', 'text-black');
    selected.classList.add('bg-black', 'text-white');


    if (id === 'Interview-filter-btn') {
        AllCardSection.classList.add('hidden');
        filtersection.classList.remove('hidden');
        renderFiltered('interview');


    } else if (id === 'Rejected-filter-btn') {
        AllCardSection.classList.add('hidden');
        filtersection.classList.remove('hidden');
        renderFiltered('rejected');


    } else {
        AllCardSection.classList.remove('hidden');
        filtersection.classList.add('hidden');
    }
}
mainContainer.addEventListener('click', function(event) {
    const card = event.target.closest('.card');
    if (!card) return;

    const companyName = card.querySelector('.companyName').innerText;
    const time = card.querySelector('.time').innerText;
    const notes = card.querySelector('.notes').innerText;
    if (event.target.classList.contains('interview-btn')) {
        card.querySelector('.status').innerText = "Interviewed";
        if (!Interviewlist.find(item => item.companyName === companyName)) {
            Interviewlist.push({ companyName, time, status: 'Interviewed', notes });
        }

        Rejectedlist = Rejectedlist.filter(item => item.companyName !== companyName);

        updateCount();
        renderFiltered('interview');
    }
    if (event.target.classList.contains('Rejected-btn')) {
        card.querySelector('.status').innerText = "Rejected";
        if (!Rejectedlist.find(item => item.companyName === companyName)) {
            Rejectedlist.push({ companyName, time, status: 'Rejected', notes });
        }

        Interviewlist = Interviewlist.filter(item => item.companyName !== companyName);

        updateCount();
        renderFiltered('rejected');
    }
});
            // delete
mainContainer.addEventListener('click', function(event) {

    const card = event.target.closest('.card');
    if (!card) return;


    const companyName = card.querySelector('.companyName').innerText;


    if (event.target.closest('.icone-delete')) {

        Interviewlist = Interviewlist.filter(item => item.companyName !== companyName);
        Rejectedlist = Rejectedlist.filter(item => item.companyName !== companyName);
        card.remove();
        updateCount();

        if (!filtersection.classList.contains('hidden')) {
            const activeType = InterviewFilterBtn.classList.contains('bg-black') ? 'interview' :
            RejectedFilterBtn.classList.contains('bg-black') ? 'rejected' : null;
            if (activeType) renderFiltered(activeType);
        }
    }
});








// render section
function renderFiltered(type) {
    filtersection.innerHTML = '';


    let list = type === 'interview' ? Interviewlist : Rejectedlist;

    if (list.length === 0) {
        filtersection.innerHTML = `
            <div class="text-center">
                <img src="./jobs.png" alt="No data" class="mx-auto w-64">
                <p class="text-gray-500 mt-4">No ${type} jobs found!</p>
            </div>
        `;
        return;
    }

    list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card flex justify-between border p-8';
        div.innerHTML = `
            <div class="space-y-6">
                <div>
                    <p class="companyName text-4xl">${item.companyName}</p>
                    <p class="jobName text-[#64748B]">React Native Developer</p>
                </div>
                <div class="flex gap-5">
                    <p class="time text-[#64748B]">${item.time}</p>
                </div>
                <p class="status inline-block bg-[#EEF4FF] ">${item.status}</p>
                <p class="notes text-[#323B49]">${item.notes}</p>
                <div class="flex gap-5">
                    <button class="interview-btn border border-[#10B981] text-[#10B981] px-4 py-2">interview</button>
                    <button class="Rejected-btn border border-[#EF4444] text-[#EF4444] px-4 py-2">Rejected</button>
                </div>
            </div>
        `;
        filtersection.appendChild(div);
    });
}

