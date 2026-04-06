const transactionData = [];

document.getElementById("transactions-service").addEventListener("click",
    function(){
        const transactionContainer = document.getElementById("transaction-container");
        transactionContainer.innerText = "";

        for(const data of transactionData) {
            const div = document.createElement("div");
            div.innerHTML = `
            <!-- card -->
            <div class="bg-white rounded-3xl flex justify-between items-center p-4 mb-5">
                <div class="flex items-center gap-3">

                    <!-- image -->
                        <div class=" bg-[#F4F5F7] p-3 rounded-full ">
                        <img src="./assets/opt-1.png" alt="">
                    </div>

                    <!-- Service Name and date -->
                    <div >
                        <h1 class="font-bold">${data.name}</h1>
                        <p class="text-sm text-[#08080880]">${data.time}</p>
                    </div>

                </div>

                <i class="fa-solid fa-ellipsis rotate-90 text-[#08080880]"></i>
            </div>
            `
            transactionContainer.appendChild(div)

        }

    })
 