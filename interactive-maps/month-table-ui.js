const languageSelect=root.querySelector('.month-language');
const russianMonths=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
let selectedLanguage='uk';
function fillMonths(){
 const language=fullMonths.languages[selectedLanguage];
 const body=root.querySelector('.month-body');
 body.replaceChildren();
 language.months.forEach((name,i)=>{
  const tr=document.createElement('tr');
  const th=document.createElement('th');th.scope='row';th.textContent=russianMonths[i];tr.append(th);
  const local=document.createElement('td');local.lang=selectedLanguage;local.textContent=name;tr.append(local);
  const meaning=document.createElement('td');meaning.textContent=language.origins[i];tr.append(meaning);body.append(tr);
 });
 root.querySelector('.month-caption').textContent=language.label+' · все 12 месяцев';
 const references=root.querySelector('.month-sources');references.replaceChildren();
 references.append(document.createTextNode('Источники: '));
 [...language.sources,['Написание: Unicode CLDR','https://cldr.unicode.org/']].forEach((entry,i)=>{
  if(i)references.append(document.createTextNode(' · '));
  const link=document.createElement('a');link.href=entry[1];link.target='_blank';link.rel='noopener noreferrer';link.textContent=entry[0];references.append(link);
 });
}
function choose(id){
 if(!data.has(id))return;
 const options=fullMonths.countries[id];
 if(selected!==id||!options.includes(selectedLanguage))selectedLanguage=options[0];
 selected=id;select.value=id;
 const r=data.get(id);
 root.querySelector('.week-detail').textContent=r[1]+' · '+groups[r[2]][0];
 languageSelect.replaceChildren();
 for(const code of options){const option=document.createElement('option');option.value=code;option.textContent=fullMonths.languages[code].label;languageSelect.append(option)}
 languageSelect.value=selectedLanguage;
 root.querySelector('.month-language-label').hidden=options.length===1;
 fillMonths();
 d3.select(root).selectAll('.country').classed('selected',d=>d.properties.id===id);
}
languageSelect.addEventListener('change',()=>{selectedLanguage=languageSelect.value;fillMonths()});
