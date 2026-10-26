const LV=[{n:"Easy",t:30,m:1,ic:"🟢"},{n:"Medium",t:20,m:1.5,ic:"🟡"},{n:"Hard",t:12,m:2,ic:"🔴"}];
const MODS=[
{id:6,name:"Number System",desc:"Decimal · Binary · Octal · Hexadecimal conversions",q:[
["Why do computers use the binary number system?",["Electronic circuits have only two stable states (ON/OFF)","Binary is the easiest for humans to read","Binary uses more digits","Decimal cannot be stored"],0,"Electronic circuits recognize only two states, OFF (0) and ON (1), so every instruction is converted into binary.",0],
["Convert 11001₂ to decimal.",["23","25","27","19"],1,"Multiply each digit by its place value: 16 + 8 + 0 + 0 + 1 = 25.",0],
["In 4,582, the digit 5 is in the hundreds place. What is its value?",["5","50","500","5,000"],2,"Each position is a power of 10: 5 × 10² = 500.",0],
["Which decimal value does the hexadecimal letter F stand for?",["10","14","15","16"],2,"A=10, B=11, C=12, D=13, E=14, F=15.",0],
["Which digits does the octal number system use?",["0 to 7","1 to 8","0 to 9","0 and 1"],0,"Octal is base 8, so it uses eight digits: 0 through 7.",0],
["Convert 101101₂ to decimal.",["41","43","45","47"],2,"32 + 0 + 8 + 4 + 0 + 1 = 45.",1],
["Convert 54₁₀ to binary.",["110110₂","101110₂","110011₂","111010₂"],0,"Repeated division by 2 gives remainders 0,1,1,0,1,1. Read from bottom to top: 110110.",1],
["Convert 325₈ to decimal.",["205","213","221","325"],1,"(3×64) + (2×8) + (5×1) = 192 + 16 + 5 = 213.",1],
["Convert 255₁₀ to hexadecimal.",["EF","FE","FF","F0"],2,"255 ÷ 16 = 15 remainder 15 (F). 15 ÷ 16 = 0 remainder 15 (F). Reading upward: FF.",1],
["Convert 94₁₀ to hexadecimal.",["4E","5E","5D","6E"],1,"94 ÷ 16 = 5 remainder 14 (E). 5 ÷ 16 = 0 remainder 5. Reading upward: 5E.",1],
["Convert 110101011₂ to octal.",["653₈","635₈","563₈","356₈"],0,"Group into threes from the right: 110 101 011 → 6, 5, 3 = 653₈.",2],
["Convert 150₁₀ to octal.",["226₈","262₈","216₈","236₈"],0,"150 ÷ 8 = 18 r 6; 18 ÷ 8 = 2 r 2; 2 ÷ 8 = 0 r 2. Reading upward: 226₈.",2],
["Convert 11110010₂ to hexadecimal.",["2F","F2","E2","F3"],1,"Group into fours: 1111 = F and 0010 = 2, so F2₁₆.",2],
["Convert 10101011₂ to hexadecimal.",["BA","AA","AB","BB"],2,"Group into fours: 1010 = A and 1011 = B, so AB₁₆.",2],
["Convert 742₈ to decimal.",["462","472","482","492"],2,"(7×64) + (4×8) + (2×1) = 448 + 32 + 2 = 482.",2]]},
{id:7,name:"Addition & Subtraction in Number Systems",desc:"Arithmetic in decimal, binary, octal and hex",q:[
["Add: 458 + 236",["684","694","704","594"],1,"Add right to left with carrying: 8+6=14 (write 4, carry 1), 5+3+1=9, 4+2=6 → 694.",0],
["Subtract: 930 − 485",["445","455","545","435"],0,"Borrow when the top digit is smaller: 930 − 485 = 445.",0],
["What is 1 + 1 in binary addition?",["2","11","10 (write 0, carry 1)","0 only"],2,"Binary has no digit 2, so 1 + 1 = 10: write 0 and carry 1.",0],
["In binary subtraction, what is needed for 0 − 1?",["Borrow from the next higher bit","Carry 1","Nothing; the result is 0","The answer is 1 with no borrow"],0,"0 − 1 cannot be done directly, so you borrow from the next higher bit.",0],
["In octal addition, you carry when the column sum is…",["8 or greater","10 or greater","7 or greater","16 or greater"],0,"Octal is base 8: if the sum is 8 or greater, subtract 8 and carry 1.",0],
["Add: 1011₂ + 1101₂",["11000₂","10110₂","11010₂","10100₂"],0,"11 + 13 = 24, which is 11000 in binary.",1],
["Add: 1110₂ + 1011₂",["11101₂","10111₂","11001₂","11011₂"],2,"14 + 11 = 25 = 11001₂.",1],
["Subtract: 1101₂ − 0101₂",["1010₂","1000₂","0110₂","1001₂"],1,"13 − 5 = 8, which is 1000₂.",1],
["Add: 2A₁₆ + 15₁₆",["3F₁₆","3E₁₆","40₁₆","3A₁₆"],0,"A = 10, and 10 + 5 = 15 = F. Then 2 + 1 = 3. Result: 3F₁₆.",1],
["Subtract: 845 − 276",["569","579","661","559"],0,"Borrow where the top digit is smaller: 845 − 276 = 569.",1],
["Add: 257₈ + 364₈",["643₈","633₈","653₈","621₈"],0,"Carry when the sum is 8 or more. Check in decimal: 175 + 244 = 419 = 643₈.",2],
["Add: 7C₁₆ + 2D₁₆",["9A₁₆","A9₁₆","A8₁₆","99₁₆"],1,"C(12)+D(13)=25 = 16+9: write 9, carry 1. Then 7+2+1 = 10 = A. Result A9₁₆.",2],
["Add: 675₈ + 127₈",["1024₈","1014₈","1124₈","1034₈"],0,"7+5=12 → write 4 carry 1; 7+2+1=10 → write 2 carry 1; 6+1+1=8 → write 0 carry 1. Result 1024₈.",2],
["Subtract: 654₈ − 237₈",["415₈","425₈","435₈","315₈"],0,"Borrow one group of 8 when needed. Check in decimal: 428 − 159 = 269 = 415₈.",2],
["Subtract: 8F₁₆ − 3A₁₆",["55₁₆","45₁₆","65₁₆","5F₁₆"],0,"F − A = 15 − 10 = 5, and 8 − 3 = 5. Result 55₁₆.",2]]},
{id:9,name:"Probability",desc:"Basic, conditional, independent events & Bayes’ Theorem",q:[
["A fair die is rolled once. What is P(even number)?",["1/6","1/3","1/2","2/3"],2,"Even outcomes are {2, 4, 6}: 3 favorable out of 6, so 3/6 = 1/2.",0],
["A card is drawn from a standard 52-card deck. P(Heart)?",["1/2","1/4","1/13","13/4"],1,"There are 13 hearts: 13/52 = 1/4.",0],
["A die is rolled. P(not rolling a 6)?",["1/6","1/2","5/6","6/5"],2,"Use the complement: P(E′) = 1 − P(E) = 1 − 1/6 = 5/6.",0],
["The probability of server downtime is 0.02. What is P(no downtime)?",["0.02","0.98","0.85","1.02"],1,"Complement rule: 1 − 0.02 = 0.98.",0],
["What does a probability of 1 mean?",["The event is certain","The event is impossible","The event is 50% likely","The event is unlikely"],0,"Probability ranges from 0 (impossible) to 1 (certain).",0],
["A card is known to be a face card. What is P(King | Face card)?",["1/13","1/4","1/3","4/52"],2,"There are 4 Kings among 12 face cards: 4/12 = 1/3.",1],
["A coin is flipped and a die is rolled. P(heads and a 4)?",["1/12","1/8","1/2","2/3"],0,"The events are independent: P(A∩B) = 1/2 × 1/6 = 1/12.",1],
["A number from 1 to 100 is chosen. P(divisible by 7)?",["7/50","1/7","14/50","7/100"],0,"There are 14 multiples of 7 (7, 14, … 98): 14/100 = 7/50.",1],
["In a class of 20, 12 are male and 5 of the males are in the programming club. Given the student is male, P(programming club)?",["5/20","5/12","12/20","5/8"],1,"P(Club | Male) = 5 males in the club out of 12 males = 5/12.",1],
["Of 100 users, 25 use a password manager and 15 use both that and 2FA. P(2FA | password manager)?",["3/5","3/8","15/40","2/5"],0,"P(A|B) = P(A∩B) / P(B) = 0.15 / 0.25 = 3/5.",1],
["5% of users have malware. A scanner detects it 95% of the time and false-flags clean users 2% of the time. P(malware | positive)?",["≈ 95%","≈ 71.43%","≈ 5%","≈ 2%"],1,"P(Pos) = 0.95×0.05 + 0.02×0.95 = 0.0665. Then P(M|Pos) = 0.0475 / 0.0665 ≈ 0.7143.",2],
["8% of traffic is malicious. A detector flags 90% of malicious and 5% of clean traffic. P(malicious | flagged)?",["≈ 90%","≈ 8%","≈ 61.02%","≈ 11.8%"],2,"P(Flag) = 0.072 + 0.046 = 0.118. P(M|Flag) = 0.072 / 0.118 ≈ 0.6102.",2],
["Of 80 students, 50 passed Math, 30 passed Programming and 20 passed both. P(Math | Programming)?",["2/3","3/5","1/4","5/8"],0,"P(Math|Prog) = (20/80) ÷ (30/80) = 20/30 = 2/3.",2],
["P(vowel) = 5/26 and P(even) = 3/6 are independent. P(vowel and even)?",["5/52","5/26","3/52","15/26"],0,"Multiply: 5/26 × 3/6 = 15/156 = 5/52.",2],
["P(malware email) = 0.1 and P(phishing email) = 0.05, assumed independent. P(both)?",["0.005","0.15","0.05","0.5"],0,"Independent events: 0.1 × 0.05 = 0.005.",2]]}
];
const $=id=>document.getElementById(id);let T=20,lv=0;
let cur,qs,i,score,streak,right,t,iv,done;
$('cards').innerHTML=MODS.map((m,k)=>`<div class="card" onclick="pickMod(${k})"><b>MODULE ${m.id}</b><h3>${m.name}</h3><span>${m.desc}</span></div>`).join('');
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('on'));$(id).classList.add('on')}
const shuf=a=>{a=[...a];for(let k=a.length-1;k>0;k--){const j=Math.random()*(k+1)|0;[a[k],a[j]]=[a[j],a[k]]}return a};
function pickMod(k){cur=k;$('sdm').textContent='Module '+MODS[k].id+': '+MODS[k].name;show('sd')}
function start(k,d){cur=k;lv=d;T=LV[d].t;const m=MODS[k];qs=shuf(m.q.filter(x=>x[4]===d)).map(([q,o,c,e])=>{const ans=o[c],so=shuf(o);return{q,o:so,c:so.indexOf(ans),e}});
i=0;score=0;streak=0;right=0;$('mname').textContent='Module '+m.id+' · '+LV[d].ic+' '+LV[d].n;$('qt').textContent=qs.length;$('sc').textContent=0;$('stk').textContent=0;show('s2');load()}
function load(){done=false;const o=qs[i];$('qn').textContent=i+1;$('q').textContent=o.q;$('fb').style.display='none';$('ex').style.display='none';$('exb').textContent='💡 Show explanation';
$('opts').innerHTML=o.o.map((x,k)=>`<button class="opt" onclick="pick(${k})"><i>${'ABCD'[k]}</i>${x}</button>`).join('');
t=T;tick();clearInterval(iv);iv=setInterval(()=>{t-=.1;tick();if(t<=0)pick(-1)},100)}
function tick(){$('tm').textContent=Math.max(0,Math.ceil(t));const f=$('fill');f.style.width=Math.max(0,t/T*100)+'%';f.className=t<T*.3?'low':''}
function pick(k){if(done)return;done=true;clearInterval(iv);const o=qs[i],b=document.querySelectorAll('.opt');b.forEach(x=>x.disabled=true);b[o.c].classList.add('ok');
const ft=$('ft');$('fb').style.display='block';
if(k===o.c){streak++;right++;const p=Math.round((100+Math.ceil(t)*5+(streak>=3?50:0))*LV[lv].m);score+=p;ft.className='t g';ft.textContent='✔ Correct! +'+p+(streak>=3?' (streak bonus!)':'');$('fa').textContent='';burst(innerWidth/2,innerHeight/2,40)}
else{streak=0;b[k]&&b[k].classList.add('no');ft.className='t r';ft.textContent=k<0?'⏰ Time’s up!':'✘ Not quite.';$('fa').innerHTML='Correct answer: <b style="color:var(--ok)">'+o.o[o.c]+'</b>'}
$('sc').textContent=score;$('sc').parentNode.classList.remove('pop');void $('sc').offsetWidth;$('sc').parentNode.classList.add('pop');$('stk').textContent=streak;
$('nx').textContent=i===qs.length-1?'See results ➜':'Next ➜'}
function toggleEx(){const e=$('ex'),on=e.style.display==='block';e.style.display=on?'none':'block';e.textContent=qs[i].e;$('exb').textContent=on?'💡 Show explanation':'🙈 Hide explanation'}
function next(){if(!done)return;if(++i>=qs.length)return finish();load()}
function finish(){const m=MODS[cur],pc=right/qs.length;$('rm').textContent='Module '+m.id+': '+m.name+' · '+LV[lv].ic+' '+LV[lv].n;$('rs').textContent=score;$('rd').textContent=right+' / '+qs.length+' correct';
$('rk').textContent=pc===1?'🏆 Perfect! Math Master':pc>=.75?'🌟 Great job!':pc>=.5?'👍 Good effort — review the explanations!':'📘 Keep practicing — you’ve got this!';show('s3');if(pc>=.5)for(let k=0;k<5;k++)setTimeout(()=>burst(Math.random()*innerWidth,innerHeight*.4,50),k*250)}
addEventListener('keydown',e=>{if(!$('s2').classList.contains('on'))return;if('1234'.includes(e.key)&&e.key)pick(+e.key-1);if((e.key==='Enter'||e.key===' ')&&done){e.preventDefault();next()}});
/* animated background + confetti */
const cv=$('bg'),cx=cv.getContext('2d');let P=[],C=[];
function rs(){cv.width=innerWidth;cv.height=innerHeight}rs();addEventListener('resize',rs);
for(let k=0;k<60;k++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*2+1,v:Math.random()*.5+.2,s:Math.random()*Math.PI});
function burst(x,y,n){for(let k=0;k<n;k++){const a=Math.random()*6.28,s=Math.random()*8+3;C.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-4,l:70,c:['#00e5ff','#2a7bff','#fff','#2ee59d'][k%4]})}}
(function loop(){cx.clearRect(0,0,cv.width,cv.height);
P.forEach(p=>{p.y-=p.v;p.s+=.02;if(p.y<-5){p.y=cv.height+5;p.x=Math.random()*cv.width}cx.beginPath();cx.arc(p.x+Math.sin(p.s)*20,p.y,p.r,0,6.28);cx.fillStyle='rgba(0,229,255,.45)';cx.fill()});
C=C.filter(c=>c.l-->0);C.forEach(c=>{c.x+=c.vx;c.y+=c.vy;c.vy+=.3;cx.fillStyle=c.c;cx.globalAlpha=c.l/70;cx.fillRect(c.x,c.y,6,6)});cx.globalAlpha=1;requestAnimationFrame(loop)})();
