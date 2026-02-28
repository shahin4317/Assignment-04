let currentTab = 'all';
const tabActive = ["bg-navy", "border-navy", "text-white"]
const tabInactive = ["bg-transparent", "text-slate-700","text-slate-200","text-black"]
const allContainer = document.getElementById("all-container")
const interviewContainer = document.getElementById("interview-container")
const rejectContainer = document.getElementById("reject-container")
const emptyStat = document.getElementById("empty-state")
// console.log(allContainer,interviewContainer,rejectContainer);



function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for(const t of tabs ){
        const tabName = document.getElementById("tab-" + t);
        if(t === tab){
            tabName.classList.remove(...tabInactive)
            tabName.classList.add(...tabActive)
        }
        else{
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInactive)
        }
    }

    const pages = [allContainer, interviewContainer, rejectContainer];
    for (const section of pages) {
        section.classList.add("hidden")
    }
    emptyStat.classList.add("hidden");

    if(tab === 'all'){
        allContainer.classList.remove('hidden')
        if(allContainer.children.length < 1){
            emptyStat.classList.remove("hidden");
        }
    }
    else if( tab === 'interview') {
        interviewContainer.classList.remove('hidden');
        if(interviewContainer.children.length < 1){
            emptyStat.classList.remove("hidden")
        }

    }
    else{
        rejectContainer.classList.remove("hidden");
        if(rejectContainer.children.length < 1){
            emptyStat.classList.remove("hidden")
        }
        
    }
    updateStat();
}

// stat update 
const totalStat = document.getElementById("stat-total")
const interviewStat = document.getElementById("stat-interview")
const rejectStat = document.getElementById("stat-reject")
totalStat.innerText = allContainer.children.length;
const availableStat= document.getElementById("available");

switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function(event){

    
    const clickedElement = event.target;
    const card = clickedElement.closest(".card")
    const parent = card.parentNode;
    const status =card.querySelector('.status')
    console.log(card, interviewContainer.length)


    if( clickedElement.classList.contains("interview")){
        status.innerText = "Interviwed"
        interviewContainer.appendChild(card);
        updateStat();

    

    }
    if( clickedElement.classList.contains("rejected")){
        status.innerText = "Rejected"
        rejectContainer.appendChild(card);
        updateStat();
      

    }
    if( clickedElement.classList.contains("delete")){
        parent.removeChild(card);
        updateStat();
       

    }
});

function updateStat(){
    // totalStat.innerText= allContainer.children.length;
    // interviewStat.innerText= 
    // rejectStat.innerText= rejectContainer.children.length;

    const counts ={
        all : allContainer.children.length,
        interview :interviewContainer.children.length,
        rejected : rejectContainer.children.length

    }

    totalStat.innerText = counts.all
    interviewStat.innerTextn= counts.interview 
    rejectStat.innerText= counts.rejected
    availableStat.innerText = counts[currentTab];
    if(counts[currentTab] < 1){
        emptyStat.classList.remove("hidden")
    }
    else{
        emptyStat.classList.add("hidden")
    }
}

updateStat();