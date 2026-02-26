let currentTab = 'all';
const tabActive = ["bg-navy", "border-navy", "text-white"]
const tabInactive = ["bg-transparent", "text-slate-700","text-slate-200","text-black"]
const allContainer = document.getElementById("all-container")
const interviewContainer = document.getElementById("interview-container")
const rejectContainer = document.getElementById("reject-container")
console.log(allContainer,interviewContainer,rejectContainer);



function switchTab(tab) {
    const tabs = ["all", "interview", "rejected"];
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

    if(tab === 'all'){
        allContainer.classList.remove('hidden')
    }
    else if( tab === 'interview') {
        interviewContainer.classList.remove('hidden');

    }
    else{
        rejectContainer.classList.remove("hidden")
    }
}

// stat update 
const totalStat = document.getElementById("stat-total")
const interviewStat = document.getElementById("interview-total")
const rejectStat = document.getElementById("reject-total")
totalStat.innerText = allContainer.children.length;

switchTab(currentTab);






