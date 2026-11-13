import { createClient } from "@supabase/supabase-js";
import "./style.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const sections = [
 {title:"Sobre a instituição", intro:"Vamos começar entendendo a estrutura e a rotina do CiP.", questions:[
  q("q1","Qual é sua função no CiP e quais atividades estão sob sua responsabilidade?","textarea"),
  q("q2","Quais áreas, cursos, projetos ou unidades fazem parte da instituição?","textarea"),
  q("q3","Quantas pessoas participam da operação e quais são suas principais responsabilidades?","textarea"),
  q("q4","Onde as informações da instituição são registradas atualmente?","multi",["Papel / fichas físicas","Planilhas","WhatsApp","E-mail","Pastas no computador ou nuvem","Sistemas específicos","Na memória das pessoas","Outro"]),
  q("q5","Quais são hoje as maiores dificuldades para organizar informações e executar tarefas administrativas?","textarea")
 ]},
 {title:"Relacionamento e cadastro",intro:"Agora queremos entender como o CiP se relaciona com apoiadores e parceiros.",questions:[
  q("q6","Que tipos de pessoas ou organizações se relacionam com o CiP?","multi",["Empresas","Pessoas físicas","Órgãos públicos","Instituições de ensino","Organizações sociais","Voluntários","Fornecedores","Parceiros institucionais","Outros"]),
  q("q7","Existe diferença entre apoiador, parceiro, voluntário e fornecedor? Como vocês definem cada um?","textarea"),
  q("q8","Quais informações precisam ser registradas no cadastro de um apoiador ou organização?","multi",["Nome / razão social","CPF ou CNPJ","Telefone","E-mail","Endereço","Pessoa de contato","Área de atuação","Histórico de relacionamento","Observações","Outras"]),
  q("q9","Uma mesma organização pode ter mais de uma pessoa de contato?","radio",["Sim","Não","Depende"],true),
  q("q10","Um mesmo apoiador pode contribuir com mais de um projeto ou área do CiP?","radio",["Sim","Não","Depende"],true),
  q("q11","É importante cadastrar possíveis apoiadores antes de existir uma contribuição efetiva?","radio",["Sim","Não","Não sei informar"],true),
  q("q12","Como normalmente acontece o primeiro contato com um possível apoiador?","multi",["WhatsApp","Telefone","E-mail","Presencialmente","Redes sociais","Indicação","Ofício / documento formal","Outro"])
 ]},
 {title:"Tipos e gestão de apoio",intro:"Esta seção trata dos apoios recebidos e de como eles são acompanhados.",questions:[
  q("q13","Quais tipos de apoio o CiP recebe ou pode receber?","multi",["Financeiro","Materiais e insumos","Alimentos","Equipamentos","Prestação de serviços","Voluntariado","Transporte","Cessão de espaço","Cursos e capacitações","Bolsas","Profissionais especializados","Divulgação / comunicação","Apoio institucional","Outros"]),
  q("q14","Com que frequência esses apoios costumam acontecer?","multi",["Pontualmente","Mensalmente","Anualmente","Por campanha ou projeto","De forma contínua","Varia conforme o apoiador"]),
  q("q15","Quais informações devem ser registradas em cada apoio recebido?","multi",["Tipo de apoio","Descrição","Quantidade","Valor estimado ou financeiro","Data de recebimento","Apoiador responsável","Projeto ou área beneficiada","Responsável interno","Condições / restrições","Comprovantes ou anexos","Outras"]),
  q("q16","Como funciona atualmente o processo desde a oferta até o recebimento de um apoio?","textarea"),
  q("q17","Existem contrapartidas, compromissos ou condições que o CiP precisa cumprir ao receber um apoio?","radio",["Sim","Não","Às vezes"],true),
  q("q18","Quando existem condições ou compromissos, quais precisam ser acompanhados?","textarea",[],false),
  q("q19","É necessário emitir ou armazenar recibos, termos, comprovantes ou prestações de contas?","multi",["Recibos","Termos de parceria / compromisso","Notas fiscais","Comprovantes de transferência","Relatórios de prestação de contas","Fotos ou evidências","Não se aplica","Outros"]),
  q("q20","O CiP acompanha os resultados ou impactos gerados por cada apoio? Como?","textarea"),
  q("q21","Há apoios que possuem restrições de uso, prazo de validade ou destinação específica?","textarea")
 ]},
 {title:"Atendimentos e tarefas",intro:"Queremos mapear os contatos realizados e os acompanhamentos que não podem ser esquecidos.",questions:[
  q("q22","Quais interações com apoiadores precisam ficar registradas?","multi",["Ligação","Mensagem / WhatsApp","E-mail","Reunião","Visita","Evento","Entrega ou retirada de apoio","Outro"]),
  q("q23","Quais dados devem constar no histórico de cada interação?","multi",["Data e horário","Pessoa envolvida","Apoiador / organização","Assunto","Resumo da conversa","Resultado","Próxima ação","Responsável","Anexos","Outros"]),
  q("q24","É importante criar tarefas e lembretes vinculados a apoiadores, projetos ou apoios?","radio",["Sim","Não","Talvez"],true),
  q("q25","Que tipos de tarefas ou lembretes seriam úteis?","multi",["Retornar contato","Enviar documentos","Agendar reunião","Cobrar retorno","Acompanhar entrega","Renovar parceria","Prestar contas","Agradecer contribuição","Outras"]),
  q("q26","As tarefas precisam ter um responsável e uma data limite?","radio",["Sim, ambos","Somente responsável","Somente data","Não"],true),
  q("q27","Quais alertas seriam importantes para a rotina?","multi",["Tarefa próxima do prazo","Tarefa atrasada","Apoio a receber","Prazo de prestação de contas","Retorno de contato pendente","Aniversário / data importante","Parceria próxima do vencimento","Outros"])
 ]},
 {title:"Usuários e permissões",intro:"Esta seção ajuda a definir quem poderá acessar e fazer alterações no sistema.",questions:[
  q("q28","Quais pessoas ou funções precisam utilizar o sistema?","multi",["Coordenação / direção","Administrativo","Financeiro","Responsáveis por projetos","Equipe de atendimento","Voluntários","Outros"]),
  q("q29","Cada usuário deve ter seu próprio acesso individual?","radio",["Sim","Não","Não sei informar"],true),
  q("q30","Quais níveis de permissão seriam necessários?","multi",["Visualizar informações","Cadastrar informações","Editar cadastros","Excluir ou arquivar registros","Acessar dados financeiros","Gerenciar usuários e permissões","Acessar relatórios","Apenas visualizar os próprios projetos","Outros"]),
  q("q31","É importante manter um histórico de quem cadastrou ou alterou cada informação?","radio",["Sim","Não","Talvez"],true),
  q("q32","Existem informações que devem ser restritas a determinadas pessoas? Quais?","textarea")
 ]},
 {title:"Consultas e relatórios",intro:"Vamos identificar quais informações precisam ser encontradas e acompanhadas com facilidade.",questions:[
  q("q33","Quais indicadores seriam úteis em uma tela inicial do sistema?","multi",["Total de apoiadores cadastrados","Apoiadores ativos","Apoios recebidos por período","Apoios por tipo","Apoios por projeto","Tarefas pendentes","Tarefas atrasadas","Valores recebidos","Parcerias ativas","Outros"]),
  q("q34","Quais filtros de pesquisa seriam importantes?","multi",["Nome do apoiador","Tipo de apoiador","Tipo de apoio","Projeto / área","Período","Status do relacionamento","Responsável interno","Localidade","Outros"]),
  q("q35","Quais relatórios o sistema deveria gerar?","textarea"),
  q("q36","Em quais formatos seria útil exportar informações?","multi",["PDF","Excel (.xlsx)","CSV","Não preciso exportar","Outros"]),
  q("q37","Com que frequência esses relatórios seriam consultados?","radio",["Diariamente","Semanalmente","Mensalmente","Apenas quando necessário","Outro"],true)
 ]},
 {title:"Tecnologia e utilização",intro:"Precisamos entender onde e como o sistema será utilizado.",questions:[
  q("q38","Em quais dispositivos o sistema será utilizado?","multi",["Computador de mesa","Notebook","Celular Android","iPhone","Tablet","Outros"]),
  q("q39","Quais atividades precisam funcionar bem pelo celular?","multi",["Consultar cadastros","Cadastrar apoiadores","Registrar apoios","Registrar interações","Consultar tarefas","Receber notificações","Anexar fotos ou documentos","Todas as opções","Outras"]),
  q("q40","Como prefere acessar o sistema?","radio",["Pelo navegador, sem instalar nada","Como aplicativo instalado","Tanto faz"],true),
  q("q41","Quais tipos de arquivo precisam ser anexados aos registros?","multi",["PDF","Fotos","Documentos Word","Planilhas","Comprovantes","Não será necessário anexar arquivos","Outros"]),
  q("q42","Quais ferramentas seria útil integrar ao sistema?","multi",["WhatsApp","E-mail","Google Drive","OneDrive","Excel","Google Planilhas","Agenda / calendário","Nenhuma integração inicialmente","Outras"]),
  q("q43","Existe algum sistema, aplicativo ou site cuja organização visual você considera uma boa referência? Qual?","textarea"),
  q("q44","O que tornaria o sistema fácil de utilizar pela equipe?","textarea")
 ]},
 {title:"Segurança, prioridades e observações",intro:"Para finalizar, vamos definir cuidados importantes e o que deve ser entregue primeiro.",questions:[
  q("q45","Que tipos de dados serão registrados e exigem cuidado especial?","multi",["Dados pessoais de apoiadores","Dados financeiros","Dados institucionais","Dados de beneficiários","Documentos e comprovantes","Não sei informar","Outros"]),
  q("q46","Existem regras sobre quem pode visualizar, compartilhar, editar ou excluir esses dados? Descreva.","textarea"),
  q("q47","Quais funcionalidades são indispensáveis para a primeira versão do sistema?","textarea"),
  q("q48","Quais funcionalidades poderiam ficar para uma versão futura?","textarea"),
  q("q49","Se pudesse escolher apenas três prioridades para o sistema, quais seriam?","textarea"),
  q("q50","Há alguma necessidade, dificuldade ou sugestão que não foi abordada neste questionário?","textarea",[],false)
 ]}
];

function q(id,label,type,options=[],required=true){return {id,label,type,options,required};}
let current=0;
const answers={};
const root=document.querySelector("#app");

function escapeHtml(value=""){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function valueFor(id){return answers[id] ?? (sections.flatMap(s=>s.questions).find(x=>x.id===id)?.type==="multi"?[]:"");}
function renderQuestion(question){
 const val=valueFor(question.id);
 const req=question.required?'<span class="required">Obrigatória</span>':'<span class="optional">Opcional</span>';
 let control="";
 if(question.type==="textarea") control=`<textarea name="${question.id}" rows="4" placeholder="Escreva sua resposta..." ${question.required?"required":""}>${escapeHtml(val)}</textarea>`;
 else if(question.type==="text"||question.type==="number") control=`<input type="${question.type}" name="${question.id}" value="${escapeHtml(val)}" ${question.required?"required":""} />`;
 else if(question.type==="radio") control=`<div class="choices">${question.options.map(o=>`<label class="choice"><input type="radio" name="${question.id}" value="${escapeHtml(o)}" ${val===o?"checked":""} ${question.required?"required":""}/><span>${escapeHtml(o)}</span></label>`).join("")}</div>`;
 else control=`<div class="choices">${question.options.map(o=>`<label class="choice"><input type="checkbox" name="${question.id}" value="${escapeHtml(o)}" ${Array.isArray(val)&&val.includes(o)?"checked":""}/><span>${escapeHtml(o)}</span></label>`).join("")}</div>`;
 return `<fieldset class="question" data-question="${question.id}"><div class="question-head"><legend>${escapeHtml(question.label)}</legend>${req}</div>${control}</fieldset>`;
}
function render(){
 const section=sections[current];
 const percent=Math.round(((current+1)/sections.length)*100);
 root.innerHTML=`
 <header class="topbar"><div class="brand-mark">CiP</div><div><strong>Centro de Integração e Promoção</strong><span>Levantamento de necessidades</span></div><span class="top-tag">QUESTIONÁRIO</span></header>
 <main class="shell">
  <div class="intro"><p class="eyebrow">PROJETO DE DESENVOLVIMENTO DE SISTEMA</p><h1>Vamos entender como o CiP funciona.</h1><p>Este questionário busca conhecer os processos, necessidades e prioridades da instituição para orientar o desenvolvimento de um sistema de gestão. Não existem respostas certas ou erradas: queremos compreender a rotina real.</p><div class="meta"><span>◷ Aproximadamente 15–20 minutos</span><span>▤ ${sections.reduce((n,s)=>n+s.questions.length,0)} perguntas</span></div></div>
  <div class="progress-card"><div class="progress-label"><span>Etapa ${current+1} de ${sections.length}</span><b>${percent}% concluído</b></div><div class="progress"><i style="width:${percent}%"></i></div><div class="steps">${sections.map((s,i)=>`<span class="${i===current?"active":i<current?"done":""}">${i+1}</span>`).join("")}</div></div>
  <form id="survey" novalidate>
   <section class="section-card"><div class="section-count">ETAPA 0${current+1}</div><h2>${section.title}</h2><p class="section-intro">${section.intro}</p><div class="respondent-fields">${current===0?`<label>Nome de quem está respondendo<input name="respondent_name" id="respondent_name" placeholder="Seu nome" value="${escapeHtml(answers.respondent_name||"")}" required /></label><label>Função / cargo<input name="respondent_role" id="respondent_role" placeholder="Sua função no CiP" value="${escapeHtml(answers.respondent_role||"")}" required /></label>`:""}</div>
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
 const section=sections[current];
 for(const question of section.questions){
  if(!question.required)continue;
  const value=answers[question.id];
  const empty=Array.isArray(value)?value.length===0:!String(value||"").trim();
  if(empty){const el=root.querySelector(`[data-question="${question.id}"]`);el?.scrollIntoView({behavior:"smooth",block:"center"});el?.classList.add("invalid");setTimeout(()=>el?.classList.remove("invalid"),1800);return false;}
 }
 if(current===0&&(!answers.respondent_name?.trim()||!answers.respondent_role?.trim())){
  const el=root.querySelector("#respondent_name");el?.reportValidity();return false;
 }
 return true;
}
async function submit(event){
 event.preventDefault();captureAll();
 if(!validateCurrent())return;
 if(!supabase){showError("A conexão com o banco de dados ainda não foi configurada. Avise a equipe responsável.");return;}
 const button=root.querySelector('button[type="submit"]');button.disabled=true;button.textContent="Enviando...";
 const payload={respondent_name:answers.respondent_name,respondent_role:answers.respondent_role,answers,submitted_at:new Date().toISOString(),form_version:"1.0"};
 const {error}=await supabase.from("cip_responses").insert(payload);
 if(error){console.error(error);button.disabled=false;button.innerHTML='Enviar respostas <span>→</span>';showError("Não foi possível enviar agora. Verifique sua conexão e tente novamente.");return;}
 root.innerHTML=`<main class="success-wrap"><div class="success-card"><div class="success-icon">✓</div><p class="eyebrow">RESPOSTA REGISTRADA</p><h1>Obrigado pela colaboração.</h1><p>Suas respostas foram enviadas com sucesso e já estão armazenadas para análise pela equipe do projeto.</p><div class="success-note">Você já pode fechar esta página.</div></div></main>`;
 window.scrollTo({top:0,behavior:"smooth"});
}
function showError(message){
 let el=root.querySelector(".error-message");
 if(!el){el=document.createElement("div");el.className="error-message";root.querySelector(".nav")?.before(el);}
 el.textContent=message;
}
render();
