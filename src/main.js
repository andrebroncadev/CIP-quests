import { createClient } from "@supabase/supabase-js";
import "./style.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const sections = [
 {title:"Sobre a instituição", intro:"Vamos começar entendendo a estrutura e a rotina do CiP.", questions:[
  q("q1","Qual é sua função no CIP e quais atividades você realiza ou acompanha no dia a dia?","textarea"),
  q("q2","Quais cursos, módulos, projetos ou áreas o CIP mantém atualmente? Se possível, informe brevemente o que cada um realiza.","textarea"),
  q("q3","Quais pessoas ou equipes participam da gestão dos apoiadores e dos apoios recebidos? O que cada uma faz?","textarea"),
  q("q4","Onde e como são registradas hoje as informações sobre apoiadores, contatos e apoios recebidos?","multi",["Papel / fichas físicas","Planilhas","WhatsApp","E-mail","Pastas no computador ou nuvem","Sistemas específicos","Na memória das pessoas","Outro"]),
  q("q5","Quais dificuldades acontecem nesse processo? Se possível, conte um exemplo e explique como isso afeta a rotina.","textarea")
 ]},
 {title:"Relacionamento e cadastro",intro:"Agora queremos entender como o CiP se relaciona com apoiadores e parceiros.",questions:[
  q("q6","Que tipos de pessoas ou organizações costumam apoiar ou manter relacionamento com o CIP?","multi",["Empresas","Pessoas físicas","Órgãos públicos","Instituições de ensino","Organizações sociais","Voluntários","Fornecedores","Parceiros institucionais","Outros"]),
  q("q7","Na rotina do CIP, há diferença entre apoiador, parceiro, voluntário e fornecedor? Como vocês distinguem esses relacionamentos?","textarea"),
  q("q8","Quais informações precisam ser registradas para identificar, localizar e manter contato com cada apoiador ou organização?","multi",["Nome / razão social","CPF ou CNPJ","Telefone","E-mail","Endereço","Pessoa de contato","Área de atuação","Histórico de relacionamento","Observações","Outras"]),
  q("q9","Uma mesma organização pode ter mais de uma pessoa de contato? Como vocês identificam o contato principal?","radio",["Sim","Não","Depende"],true),
  q("q10","Um mesmo apoiador pode destinar apoios a mais de um módulo, curso ou projeto do CIP?","radio",["Sim","Não","Depende"],true),
  q("q11","Como vocês acompanham pessoas ou organizações que demonstraram interesse, mas ainda não realizaram um apoio? Quais etapas esse relacionamento percorre?","textarea"),
  q("q12","Por quais canais o CIP costuma iniciar ou receber contato de possíveis apoiadores?","multi",["WhatsApp","Telefone","E-mail","Presencialmente","Redes sociais","Indicação","Ofício / documento formal","Outro"])
 ]},
 {title:"Tipos e gestão de apoio",intro:"Esta seção trata dos apoios recebidos e de como eles são acompanhados.",questions:[
  q("q13","Descreva os tipos de apoio que o CIP recebe atualmente ou pretende receber. Inclua exemplos concretos, se possível.","textarea"),
  q("q14","Com que frequência os apoios acontecem e por quanto tempo costumam durar? Há apoios pontuais, recorrentes ou vinculados a períodos específicos?","multi",["Pontualmente","Mensalmente","Anualmente","Por campanha ou projeto","De forma contínua","Varia conforme o apoiador"]),
  q("q15","Ao registrar um apoio, quais informações precisam ser acompanhadas? Considere, por exemplo, descrição, quantidade, unidade de medida, datas, situação, origem, destino e responsável.","multi",["Tipo de apoio","Descrição do item ou serviço","Quantidade","Unidade de medida","Valor estimado, quando aplicável","Data da oferta","Data prevista de entrega","Data de recebimento","Situação / etapa atual","Apoiador responsável","Projeto, módulo ou setor de destino","Pessoa responsável no CIP","Prazo de validade ou uso","Condições / restrições","Documentos ou comprovantes","Outras"]),
  q("q16","Descreva o caminho de um apoio desde o primeiro contato ou oferta até seu recebimento. Quem participa e o que acontece em cada etapa?","textarea"),
  q("q17","Quais situações ou etapas um apoio pode atravessar até ser concluído?","multi",["Contato inicial / oferta recebida","Em avaliação","Aprovado / aceito","Aguardando entrega","Recebido parcialmente","Recebido integralmente","Recusado","Cancelado","Em armazenamento","Em uso / distribuição","Concluído","Não existe acompanhamento por etapas","Outras"]),
  q("q18","Há condições, contrapartidas, prazos ou compromissos associados aos apoios? Como essas obrigações são registradas e acompanhadas?","textarea",[],false),
  q("q19","Quais documentos ou evidências precisam ser emitidos, recebidos ou guardados durante o relacionamento e o recebimento dos apoios?","multi",["Recibos","Termos de parceria / compromisso","Notas fiscais","Comprovantes de transferência","Relatórios de prestação de contas","Fotos ou evidências","Não se aplica","Outros"]),
  q("q20","Depois de recebido, o que acontece com o apoio? Ele é armazenado, distribuído, consumido, utilizado em atividades ou encaminhado a algum setor? Descreva o fluxo.","textarea"),
  q("q21","Como o CIP registra a destinação de cada apoio, quem o recebeu ou utilizou e quem ficou responsável por esse encaminhamento? Existem restrições de uso ou validade?","textarea")
 ]},
 {title:"Atendimentos e tarefas",intro:"Queremos mapear os contatos realizados e os acompanhamentos que não podem ser esquecidos.",questions:[
  q("q22","Quais tipos de contato ou interação com apoiadores precisam fazer parte do histórico?","multi",["Ligação","Mensagem / WhatsApp","E-mail","Reunião","Visita","Evento","Entrega ou retirada de apoio","Outro"]),
  q("q23","O que precisa ficar registrado em cada interação para que outra pessoa da equipe consiga entender o que aconteceu e dar continuidade ao atendimento?","multi",["Data e horário","Pessoa envolvida","Apoiador / organização","Assunto","Resumo da conversa","Resultado","Próxima ação","Responsável","Anexos","Outros"]),
  q("q24","Quais acompanhamentos precisam gerar tarefas ou lembretes vinculados a um apoiador, a um apoio ou a um projeto?","textarea"),
  q("q25","Quais tarefas a equipe precisa acompanhar com mais frequência?","multi",["Retornar contato","Enviar documentos","Agendar reunião","Cobrar retorno","Acompanhar entrega","Renovar parceria","Prestar contas","Agradecer contribuição","Outras"]),
  q("q26","Como são definidos os responsáveis e os prazos das tarefas? É necessário registrar ambos? Há regras para redistribuir tarefas quando alguém se ausenta?","textarea"),
  q("q27","Em quais situações a equipe precisa receber um alerta para não perder um prazo, contato ou etapa importante?","multi",["Tarefa próxima do prazo","Tarefa atrasada","Apoio a receber","Prazo de prestação de contas","Retorno de contato pendente","Aniversário / data importante","Parceria próxima do vencimento","Outros"])
 ]},
 {title:"Usuários e permissões",intro:"Esta seção ajuda a definir quem poderá acessar e fazer alterações no sistema.",questions:[
  q("q28","Quais pessoas ou funções da instituição precisarão acessar o sistema? Descreva os setores ou responsabilidades.","multi",["Coordenação / direção","Administrativo","Financeiro","Responsáveis por projetos","Equipe de atendimento","Voluntários","Outros"]),
  q("q29","Cada integrante deve ter uma conta individual, para que o sistema identifique quem realizou cada ação?","radio",["Sim","Não","Não sei informar"],true),
  q("q30","O que cada perfil de usuário poderá fazer no sistema? Indique quem pode consultar, cadastrar, alterar, excluir, administrar acessos e visualizar informações restritas.","multi",["Visualizar informações","Cadastrar informações","Editar cadastros","Excluir ou arquivar registros","Acessar dados financeiros","Gerenciar usuários e permissões","Acessar relatórios","Apenas visualizar os próprios projetos","Outros"]),
  q("q31","É necessário consultar quem criou, alterou ou excluiu um registro e quando isso aconteceu?","radio",["Sim","Não","Talvez"],true),
  q("q32","Quais informações devem ficar visíveis apenas para determinadas pessoas ou setores? Quem deve ter acesso a elas?","textarea")
 ]},
 {title:"Consultas e relatórios",intro:"Vamos identificar quais informações precisam ser encontradas e acompanhadas com facilidade.",questions:[
  q("q33","Quais informações a coordenação ou a equipe precisa visualizar logo ao entrar no sistema para acompanhar a situação dos apoiadores e dos apoios?","multi",["Total de apoiadores cadastrados","Apoiadores ativos","Apoios recebidos por período","Apoios por tipo","Apoios por projeto","Tarefas pendentes","Tarefas atrasadas","Valores recebidos","Parcerias ativas","Outros"]),
  q("q34","Quais critérios a equipe utiliza para localizar rapidamente um apoiador, um apoio ou um registro?","multi",["Nome do apoiador","Tipo de apoiador","Tipo de apoio","Projeto / área","Período","Status do relacionamento","Responsável interno","Localidade","Outros"]),
  q("q35","Quais relatórios precisam ser emitidos? Para cada um, informe, se souber, quem o consulta, com qual finalidade e em que período.","textarea"),
  q("q36","Em quais formatos a equipe precisa consultar, compartilhar ou exportar os relatórios e dados?","multi",["PDF","Excel (.xlsx)","CSV","Não preciso exportar","Outros"]),
  q("q37","Com que frequência cada relatório ou indicador costuma ser consultado?","radio",["Diariamente","Semanalmente","Mensalmente","Apenas quando necessário","Outro"],true)
 ]},
 {title:"Tecnologia e utilização",intro:"Precisamos entender onde e como o sistema será utilizado.",questions:[
  q("q38","Quais dispositivos a equipe utiliza no trabalho e em quais deles precisa acessar o sistema?","multi",["Computador de mesa","Notebook","Celular Android","iPhone","Tablet","Outros"]),
  q("q39","O que a equipe precisa conseguir fazer pelo celular, especialmente quando estiver fora de sua mesa ou em atividades externas?","multi",["Consultar cadastros","Cadastrar apoiadores","Registrar apoios","Registrar interações","Consultar tarefas","Receber notificações","Anexar fotos ou documentos","Todas as opções","Outras"]),
  q("q40","O sistema será utilizado em locais com conexão instável? É necessário consultar ou registrar informações mesmo sem internet?","radio",["Sim, precisa funcionar sem internet","Não, sempre haverá conexão","Não sei informar"],false),
  q("q41","Quais tipos de documentos, imagens ou arquivos precisam ser anexados aos cadastros, contatos ou registros de apoio?","multi",["PDF","Fotos","Documentos Word","Planilhas","Comprovantes","Não será necessário anexar arquivos","Outros"]),
  q("q42","Quais ferramentas já utilizadas pelo CIP deveriam trocar informações com o sistema? Para qual finalidade?","multi",["WhatsApp","E-mail","Google Drive","OneDrive","Excel","Google Planilhas","Agenda / calendário","Nenhuma integração inicialmente","Outras"]),
  q("q43","Existe algum sistema, aplicativo ou site cuja organização ou forma de uso facilite seu trabalho? Qual e o que você considera útil nele?","textarea"),
  q("q44","O que precisa ser considerado para que pessoas com diferentes níveis de familiaridade com tecnologia consigam utilizar o sistema sem dificuldade?","textarea")
 ]},
 {title:"Segurança, prioridades e observações",intro:"Para finalizar, vamos definir cuidados importantes e o que deve ser entregue primeiro.",questions:[
  q("q45","Quais tipos de informação serão registrados e precisam de cuidado especial, como dados pessoais, documentos, informações institucionais ou valores estimados dos apoios?","multi",["Dados pessoais de apoiadores","Dados financeiros","Dados institucionais","Dados de beneficiários","Documentos e comprovantes","Não sei informar","Outros"]),
  q("q46","Quais regras devem orientar a consulta, o compartilhamento, a alteração e a exclusão das informações? Há algum prazo para manter registros ou documentos?","textarea"),
  q("q47","Quais funções precisam estar disponíveis na primeira versão para resolver os problemas mais importantes da rotina? Explique por que são essenciais.","textarea"),
  q("q48","Quais melhorias seriam úteis, mas poderiam ser desenvolvidas depois da primeira versão?","textarea"),
  q("q49","Se a equipe tivesse que escolher apenas três melhorias para começar, quais deveriam ser priorizadas? Coloque-as em ordem de importância.","textarea"),
  q("q50","Há alguma situação real, exceção, dificuldade ou necessidade do trabalho com apoiadores e apoios que não apareceu nas perguntas anteriores?","textarea",[],false)
 ]}
];

function q(id,label,type,options=[],required=false){return {id,label,type,options,required:false};}
let current=0;
const answers={};
const root=document.querySelector("#app");

function escapeHtml(value=""){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function valueFor(id){return answers[id] ?? (sections.flatMap(s=>s.questions).find(x=>x.id===id)?.type==="multi"?[]:"");}
function renderQuestion(question){
 const val=valueFor(question.id);
 const req='';
 let control="";
 if(question.type==="textarea") control=`<textarea name="${question.id}" rows="4" placeholder="Escreva sua resposta..." >${escapeHtml(val)}</textarea>`;
 else if(question.type==="text"||question.type==="number") control=`<input type="${question.type}" name="${question.id}" value="${escapeHtml(val)}"  />`;
 else if(question.type==="radio") control=`<div class="choices">${question.options.map(o=>`<label class="choice"><input type="radio" name="${question.id}" value="${escapeHtml(o)}" ${val===o?"checked":""} /><span>${escapeHtml(o)}</span></label>`).join("")}</div>`;
 else control=`<div class="choices">${question.options.map(o=>`<label class="choice"><input type="checkbox" name="${question.id}" value="${escapeHtml(o)}" ${Array.isArray(val)&&val.includes(o)?"checked":""}/><span>${escapeHtml(o)}</span></label>`).join("")}</div>`;
 return `<fieldset class="question" data-question="${question.id}"><div class="question-head"><legend>${escapeHtml(question.label)}</legend>${req}</div>${control}</fieldset>`;
}
function render(){
 const section=sections[current];
 const percent=Math.round(((current+1)/sections.length)*100);
 root.innerHTML=`
 <header class="topbar"><div class="brand-mark">CiP</div><div><strong>Centro de Integração e Promoção</strong><span>Levantamento de necessidades</span></div><span class="top-tag">QUESTIONÁRIO</span></header>
 <main class="shell">
  <div class="intro"><p class="eyebrow">PROJETO DE DESENVOLVIMENTO DE SISTEMA</p><h1>Vamos entender como o CiP funciona.</h1><p>Este questionário busca entender como o CIP organiza o relacionamento com seus apoiadores e acompanha os apoios recebidos. Responda com base na rotina real da instituição. Ao final, você poderá revisar as perguntas que ficaram sem resposta antes de enviar.</p><div class="meta"><span>◷ Aproximadamente 15–20 minutos</span><span>▤ ${sections.reduce((n,s)=>n+s.questions.length,0)} perguntas</span></div></div>
  <div class="progress-card"><div class="progress-label"><span>Etapa ${current+1} de ${sections.length}</span><b>${percent}% concluído</b></div><div class="progress"><i style="width:${percent}%"></i></div><div class="steps">${sections.map((s,i)=>`<span class="${i===current?"active":i<current?"done":""}">${i+1}</span>`).join("")}</div></div>
  <form id="survey" novalidate>
   <section class="section-card"><div class="section-count">ETAPA 0${current+1}</div><h2>${section.title}</h2><p class="section-intro">${section.intro}</p><div class="respondent-fields">${current===0?`<label>Nome de quem está respondendo <span class="required-name">(obrigatório)</span><input name="respondent_name" id="respondent_name" placeholder="Seu nome" value="${escapeHtml(answers.respondent_name||"")}" required /></label><label>Função / cargo<input name="respondent_role" id="respondent_role" placeholder="Sua função no CiP" value="${escapeHtml(answers.respondent_role||"")}" /></label>`:""}</div>
    <div class="questions">${section.questions.map(renderQuestion).join("")}</div>
   </section>
   <div class="nav"><button type="button" class="btn secondary" id="back" ${current===0?"disabled":""}>← Voltar</button><span class="autosave">Suas respostas ficam nesta página até o envio.</span>${current===sections.length-1?'<button type="submit" class="btn primary">Enviar respostas <span>→</span></button>':'<button type="button" class="btn primary" id="next">Próxima etapa <span>→</span></button>'}</div>
  </form>
  <footer>CiP · Questionário de levantamento de requisitos<br><small>As respostas serão utilizadas pela equipe do projeto para análise e definição dos requisitos do sistema.</small></footer>
 </main>`;
 root.querySelectorAll("input,textarea").forEach(el=>el.addEventListener("change",capture));
 root.querySelectorAll("textarea,input[type=text],input[type=number]").forEach(el=>el.addEventListener("input",capture));
 root.querySelector("#back").addEventListener("click",()=>{captureAll();current=Math.max(0,current-1);render();window.scrollTo({top:0,behavior:"smooth"});});
 const next=root.querySelector("#next");
 if(next) next.addEventListener("click",()=>{captureAll();if(!validateCurrent())return;current=Math.min(sections.length-1,current+1);render();window.scrollTo({top:0,behavior:"smooth"});});
 root.querySelector("#survey").addEventListener("submit",submit);
}
function capture(event){
 const el=event.target;
 if(el.name==="respondent_name"||el.name==="respondent_role"){answers[el.name]=el.value;return;}
 if(!el.name)return;
 if(el.type==="checkbox"){
  answers[el.name]=[...root.querySelectorAll(`input[name="${el.name}"]:checked`)].map(x=>x.value);
 }else if(el.type==="radio"){
  if(el.checked)answers[el.name]=el.value;
 }else answers[el.name]=el.value;
}
function captureAll(){
 const section=sections[current];
 if(current===0){answers.respondent_name=root.querySelector("#respondent_name")?.value||"";answers.respondent_role=root.querySelector("#respondent_role")?.value||"";}
 section.questions.forEach(question=>{
  if(question.type==="multi")answers[question.id]=[...root.querySelectorAll(`input[name="${question.id}"]:checked`)].map(x=>x.value);
  else if(question.type==="radio")answers[question.id]=root.querySelector(`input[name="${question.id}"]:checked`)?.value||"";
  else answers[question.id]=root.querySelector(`[name="${question.id}"]`)?.value||"";
 });
}
function validateCurrent(){
 if(current===0&&!answers.respondent_name?.trim()){
  const el=root.querySelector('#respondent_name');el?.reportValidity();return false;
 }
 return true;
}
function panelScroll(){root.querySelector('.pending-review')?.scrollIntoView({behavior:'smooth',block:'start'});}
function renderPendingReview(unanswered){
 const panel=document.createElement('section');panel.className='section-card pending-review';
 panel.innerHTML='<div class="section-count">REVISÃO FINAL</div><h2>Estas perguntas ficaram em branco</h2><p class="section-intro">Você pode voltar às etapas para responder ou enviar o questionário como está.</p><ul>'+unanswered.map(question=>{
  const sectionIndex=sections.findIndex(section=>section.questions.some(item=>item.id===question.id));
  return '<li><span>'+escapeHtml(question.label)+'</span><button type="button" class="review-jump" data-section="'+sectionIndex+'">Etapa '+(sectionIndex+1)+'</button></li>';
 }).join('')+'</ul><button type="button" class="btn primary" id="send-anyway">Enviar mesmo assim →</button>';
 root.querySelector('#survey').append(panel);
 panel.querySelectorAll('[data-section]').forEach(button=>button.addEventListener('click',()=>{current=Number(button.dataset.section);render();window.scrollTo({top:0,behavior:'smooth'});}));
 panel.querySelector('#send-anyway').addEventListener('click',()=>sendAnswers());
}
async function submit(event){
 event.preventDefault();captureAll();
 if(!validateCurrent())return;
 const unanswered=sections.flatMap(section=>section.questions.filter(question=>{
  const value=answers[question.id];
  return Array.isArray(value)?value.length===0:!String(value??'').trim();
 }));
 if(unanswered.length){renderPendingReview(unanswered);panelScroll();return;}
 if(!supabase){showError('A conexão com o banco de dados ainda não foi configurada. Avise a equipe responsável.');return;}
 const button=root.querySelector('button[type="submit"]');button.disabled=true;button.textContent='Enviando...';
 const payload={respondent_name:answers.respondent_name,respondent_role:answers.respondent_role?.trim()||'Não informado',answers,submitted_at:new Date().toISOString(),form_version:'1.1'};
 const {error}=await supabase.from('cip_responses').insert(payload);
 if(error){console.error(error);button.disabled=false;button.innerHTML='Enviar respostas →';showError('Não foi possível enviar agora. Verifique sua conexão e tente novamente.');return;}
 root.innerHTML='<main class="success-wrap"><div class="success-card"><div class="success-icon">✓</div><p class="eyebrow">RESPOSTA REGISTRADA</p><h1>Obrigado pela colaboração.</h1><p>Suas respostas foram enviadas com sucesso e já estão armazenadas para análise pela equipe do projeto.</p><div class="success-note">Você já pode fechar esta página.</div></div></main>';
 window.scrollTo({top:0,behavior:'smooth'});
}
function showError(message){
 let el=root.querySelector(".error-message");
 if(!el){el=document.createElement("div");el.className="error-message";root.querySelector(".nav")?.before(el);}
 el.textContent=message;
}
render();
