var content_page = document.getElementById("contentPage");
var seatMap = document.getElementById("SeatMapPage");
var checkOut = document.getElementById("CheckOutPage");
var currentPage = test;

var seatArray = [
    [
        seat1A = {isSeleted : false},
        seat1B = {isSeleted : false},
        seat1C = {isSeleted : false},
        seat1D = {isSeleted : false},
        seat1E = {isSeleted : false},
        seat1F = {isSeleted : false},
        seat1G = {isSeleted : false},
        seat1H = {isSeleted : false}
    ],
    [
        seat2A = {isSeleted : false},
        seat2B = {isSeleted : false},
        seat2C = {isSeleted : false},
        seat2D = {isSeleted : false},
        seat2E = {isSeleted : false},
        seat2F = {isSeleted : false},
        seat2G = {isSeleted : false},
        seat2H = {isSeleted : false}        
    ],
    [
        seat3A = {isSeleted : false},
        seat3B = {isSeleted : false},
        seat3C = {isSeleted : false},
        seat3D = {isSeleted : false},
        seat3E = {isSeleted : false},
        seat3F = {isSeleted : false},
        seat3G = {isSeleted : false},
        seat3H = {isSeleted : false}        
    ],
    [
        seat4A = {isSeleted : false},
        seat4B = {isSeleted : false},
        seat4C = {isSeleted : false},
        seat4D = {isSeleted : false},
        seat4E = {isSeleted : false},
        seat4F = {isSeleted : false},
        seat4G = {isSeleted : false},
        seat4H = {isSeleted : false}        
    ],
    [
        seat5A = {isSeleted : false},
        seat5B = {isSeleted : false},
        seat5C = {isSeleted : false},
        seat5D = {isSeleted : false},
        seat5E = {isSeleted : false},
        seat5F = {isSeleted : false},
        seat5G = {isSeleted : false},
        seat5H = {isSeleted : false}        
    ]
];

function selectSeat(seatRow , seatCol){
    var name = 'seat';
    name+= seatRow;
    name+= seatCol;
    if(seatArray[seatRow-1][seatCol-1].isSeleted == false){
        seatArray[seatRow-1][seatCol-1].isSeleted = true;
        document.getElementById(name).className = 'changeToGreen';
    }else{
        seatArray[seatRow-1][seatCol-1].isSeleted = false;
        document.getElementById(name).className = 'changeToBlue';
    }
}
/*
function prevPage(){
    switch(currentPage){

        case content_page:
            break;

        case seatMap:
            content_page.style.display = "inline"; //to change to previous page
            seatMap.style.display = "none";
            checkOut.style.display = "none";
            currentPage = test;    
            break;

        default:
            break;
    }
}
*/

function seatMapPage(){
    test.style.display = "none";
    seatMap.style.display = "inline";
    checkOut.style.display = "none";
    currentPage = seatMap;    
}

//testing
function nextPage(){
    switch(currentPage){

        case content_page:
            content_page.style.display = "none";
            seatMap.style.display = "inline";
            checkOut.style.display = "none";
            currentPage = seatMap;           
            break;

        case seatMap:
            content_page.style.display = "none"; //to change to previous page
            seatMap.style.display = "none";
            checkOut.style.display = "inline";
            currentPage = checkOut;    
            fillCart();
            break;

        case checkOut:
            break;
    }  
}



function fillCart(){
    var cartItemDiv = document.getElementById("checkOutBoxLeft");
    var totalPriceDiv = document.getElementById("totalPrice");
    var itemHTMl = "";
    var priceHTML  = "";
    var countTotal = 0.0;

    for(let i = 0 ; i<seatArray.length ; i++ ){
        for(let j=0 ; j<seatArray[i].length ; j++){
            if(seatArray[i][j].isSeleted == true){
                var seatNum = (i+1);
                var convertj = String.fromCharCode(65 + j) ;
                seatNum += convertj;
                itemHTMl += `<div class="ticketCard">`;
                itemHTMl += `<img class="ticketCardPic" src="in-the-earth.jpg">`; //src to be edit
                itemHTMl += `<p style="float:left;">movieName</p>`; //to be edit 
                itemHTMl += `<p style="float:right;">${seatNum}</p>`;

                itemHTMl +=`</div>`;

                countTotal += 10.0; //to change to ticket price;
            }
        }//end for
    }//end for

    priceHTML += `<p>$${countTotal.toFixed(2)}</p>`;
    priceHTML += `<p>$${(countTotal * 0.05).toFixed(2)}</p>`;
    priceHTML += `<p>$${(countTotal * 0.07).toFixed(2)}</p>`;
    priceHTML += `<p>$${((countTotal) * 1.12).toFixed(2)}</p>`;

    cartItemDiv.innerHTML = itemHTMl;
    totalPriceDiv.innerHTML = priceHTML;
}

function testCart(){
    var totalPriceDiv1 = document.getElementById("totalPrice");
    var priceHTML1  = "";
    var countTotal1 = 10.0;

    priceHTML1 += `<p>$${countTotal1.toFixed(2)}</p>`;
    priceHTML1 += `<p>$${(countTotal1 * 0.05).toFixed(2)}</p>`;
    priceHTML1 += `<p>$${(countTotal1 * 0.07).toFixed(2)}</p>`;
    priceHTML1 += `<p>$${((countTotal1) * 1.12).toFixed(2)}</p>`;

    totalPriceDiv1.innerHTML = priceHTML1;
}