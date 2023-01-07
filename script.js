document.body.innerHTML = 
`<div class="container">
<div class="calculator">
    <input id="output" type="text" placeholder="0">
    <button onclick="Clear()">C</button>
    <button onclick="del()">Del</button>
    <button onclick="display('%')">%</button>
    <button onclick="display('/')">/</button>
    <button onclick="display('7')">7</button>
    <button onclick="display('8')">8</button>
    <button onclick="display('9')">9</button>
    <button onclick="display('*')">*</button>
    <button onclick="display('4')">4</button>
    <button onclick="display('5')">5</button>
    <button onclick="display('6')">6</button>
    <button onclick="display('-')">-</button>
    <button onclick="display('1')">1</button>
    <button onclick="display('2')">2</button>
    <button onclick="display('3')">3</button>
    <button onclick="display('+')">+</button>
    <button class="dot" onclick="display('.')">.</button>
    <button onclick="display('0')">0</button>
    <button class="equal" onclick="calculate()">=</button>   
</div>
</div>`
 
 let output = document.getElementById("output");

 function display(num){
    output.value += num;
 }
 function calculate(){
    try {
        output.value = eval(output.value);
    } catch (error) {
        alert("Invalid Function");
    }
 }
function Clear(){
    output.value = "";
}
function del(){
    output.value = output.value.slice(0, -1);
}