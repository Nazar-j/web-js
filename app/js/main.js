

const { Tab } = require("bootstrap");

const box = document.querySelector('.box');
const btn = document.querySelector('.button');
const menu = document.querySelector('.menu');


//годинник  


function toggleSettings() {
    const settingsMenu = document.getElementById('settingsMenu');
    // Змінюємо стиль відображення: block/none
    settingsMenu.style.display = (settingsMenu.style.display === 'none' || settingsMenu.style.display === '') ? 'block' : 'none';
  }
  
 function chart(){
    // Declare the chart dimensions and margins.
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;
  
    // Declare the x (horizontal position) scale.
    const x = d3.scaleUtc(d3.extent(aapl, d => d.date), [marginLeft, width - marginRight]);
  
    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear([0, d3.max(aapl, d => d.close)], [height - marginBottom, marginTop]);
  
    // Declare the area generator.
    const area = d3.area()
        .x(d => x(d.date))
        .y0(y(0))
        .y1(d => y(d.close));
  
    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");
  
    // Append a path for the area (under the axes).
    svg.append("path")
        .attr("fill", "steelblue")
        .attr("d", area(aapl));
  
    // Add the x-axis.
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));
  
    // Add the y-axis, remove the domain line, add grid lines and a label.
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).ticks(height / 40))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ Daily close ($)"));
  
    return svg.node();
  }

function active1() {
    const button11=document.querySelector('.js-point-button');
    currentvalue = document.getElementById('onoff').value;

    if(currentvalue == "Off"){
        document.getElementById("onoff").value="On";
    button11.classList.add('point-button-active');
   // console.log(i); 
    }else{
        document.getElementById("onoff").value="Off";
        button11.classList.remove('point-button-active');
        button11.classList.add('point-button');
        a=0;   
        //console.log(i);  
    }
}
function active2() {
    const button11=document.querySelector('.js-point-button2');
    currentvalue = document.getElementById('onoff').value;

    if(currentvalue == "Off"){
        document.getElementById("onoff").value="On";
    button11.classList.add('point-button-active');
   // console.log(i); 
    }else{
        document.getElementById("onoff").value="Off";
        button11.classList.remove('point-button-active');
        button11.classList.add('point-button');
        a=0;   
        //console.log(i);  
    }
}
function active3() {
    const button11=document.querySelector('.js-point-button3');
    currentvalue = document.getElementById('onoff').value;

    if(currentvalue == "Off"){
        document.getElementById("onoff").value="On";
    button11.classList.add('point-button-active');
   // console.log(i); 
    }else{
        document.getElementById("onoff").value="Off";
        button11.classList.remove('point-button-active');
        button11.classList.add('point-button');
        a=0;   
        //console.log(i);  
    }
}
function active4() {
    const button11=document.querySelector('.js-point-button4');
    currentvalue = document.getElementById('onoff').value;

    if(currentvalue == "Off"){
        document.getElementById("onoff").value="On";
    button11.classList.add('point-button-active');
   // console.log(i); 
    }else{
        document.getElementById("onoff").value="Off";
        button11.classList.remove('point-button-active');
        button11.classList.add('point-button');
        a=0;   
        //console.log(i);  
    }
}
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12; // Конвертуємо години у 12-годинний формат
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(now);
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(now);
    const date = now.getDate();
    
    const clock = document.getElementById('clock');
    const ampmElement = document.getElementById('ampm');
    const dateElement = document.getElementById('date');

    clock.textContent = `${hours}:${minutes}`;
    ampmElement.textContent = ampm;
    dateElement.textContent = `${dayOfWeek}, ${month} ${date}`;
  }

  // Оновлюємо годинник кожну секунду
  setInterval(updateClock, 1000);

  // Викликаємо функцію одразу для ініціалізації годинника
  updateClock();
 

function bgGradienr(ctx, chartArea, scales){
    const{ left,right,to,bottom,width,height}=chartArea;
    const{x,y}=scales;
    const gradientBackground=ctx.creatLinerGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0,'rgba(0, 183, 255, 1');
    gradientBackground.addColorStop(0,'rgba(0.5, 183, 255, 0.3');
    gradientBackground.addColorStop(0,'rgba(0.5, 183, 255, 0.001');
    return gradientBackground;
}
  
function timeFrame(period){
 console.log(period.value)
 if(period.value =='yValuesday'){
    currentData = yValuesDay;
    currentLabels = xValuesDay;
    currentData2 = yValuesDay2;
}
 if(period.value =='yValuesWeek'){
   // myChart1.config.opotions.scales.x.time.unit='period.value';
   currentData = yValuesWeek;
   currentLabels =  xValuesWeek;
   currentData2 = yValuesWeek2;
   }
 if(period.value =='yValuesMonth'){
    currentData = yValuesMonth;
    currentLabels = xValuesMonth;
    currentData2 = yValuesMonth2;
   }

   config.data.datasets[1].data = currentData2;
   config.data.labels = currentLabels;
   config.data.datasets[0].data = currentData;
   myChart.update();
}