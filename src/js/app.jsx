const {useState,useEffect,useRef} = React;
const IMG = window.IMG || {};

/* =========================================================
   CONTENT. Edit copy and imagery here.
   Imagery: every photograph is Victoria Stone client imagery from Drive,
   used temporarily. Frames mark where photography is still needed.
   ========================================================= */
const NAV = [
  {id:"approach",label:"Approach"},
  {id:"expertise",label:"Expertise"},
  {id:"about",label:"About"},
];
const V = ({children}) => <span className="verify" title="Needs verification before publishing">{children}</span>;

const SECTORS = [
  ["Architecture and interior design practices","Thinking worth showing"],
  ["Craftspeople and makers","Where the detail is the point"],
  ["Design-led manufacturers","Real craft, plenty to explain"],
  ["Architectural products and materials","Products specifiers must trust"],
  ["Property developers","Schemes that need a story early"],
  ["Specialist contractors","Reputation built job by job"],
];

const PROCESS = [
  ["Getting to know your business","We start with your ambitions, your best work and the clients you'd most like more of."],
  ["Agreeing the direction","We set your positioning, your priorities and a marketing plan built around your pipeline, your project completions and the year's launches, shows and awards."],
  ["Putting plans into action","We plan photography and film around the work, then deliver content, campaigns and communications across the right channels, month after month."],
  ["Reviewing performance","Each month we report on what's working, what isn't and who is paying attention, in plain English."],
  ["Keeping things moving","Reputations in this market are built over years. We keep refining the approach as your projects, priorities and market evolve."],
];

const PILLARS = [
  ["Direction","A clear strategy, meaningful priorities and marketing that supports your wider business goals."],
  ["Creative","Distinctive ideas and thoughtful content that make people pay attention."],
  ["Delivery","Campaigns, content and communications brought to life consistently and to a high standard."],
  ["Analysis","Understanding what's working, what isn't and where the next opportunity lies."],
];

/* Client logos: add approved logos here as {name:"Client name", logo:"data or file URL"}.
   Empty lists show quiet placeholders. Never add a client without approval. */
const CLIENTS = [
  {name:"Trinity London", url:"https://www.trinity.london", logo:IMG["client_trinity-london"]},
  {name:"Ace Contracts", url:"https://acecontracts.com/", logo:IMG["client_ace-contracts"]},
  {name:"Victoria Stone", url:"https://www.victoriastone.co.uk/", logo:IMG["client_victoria-stone"]},
  {name:"KSR Architects & Interior Designers", url:"https://ksrarchitects.com/", logo:IMG["client_ksr-architects-interior-designers"]},
  {name:"Multipli", url:"https://www.multipli.co.uk/", logo:IMG["client_multipli"]},
  {name:"Artistic Statements", url:"https://www.artisticstatements.co.uk/", logo:IMG["client_artistic-statements"]},
  {name:"ISUMO", url:"https://www.isumo.com/", logo:IMG["client_isumo"]},
  {name:"Dodds & Shute", url:"https://www.doddsandshute.com/", logo:IMG["client_dodds-shute"]},
  {name:"Metric", url:"https://www.metricre.com/", logo:IMG["client_metric"]},
];

const EXPERTISE = [
  {t:"Strategy and marketing direction", when:"A clear plan and sensible priorities for a market where work is won on reputation, referral and long relationships.", items:"Marketing strategy, audience insight, annual and quarterly planning, budget and channel priorities"},
  {t:"Brand and positioning", when:"Positioning and messaging that make the quality of your work easier to understand, and harder to forget, for private clients and the professionals who specify you.", items:"Positioning, messaging, proposition, tone of voice, brand guidelines, competitor review"},
  {t:"Content and creative", when:"Content that does your best projects and pieces justice, from the making to the finished room, and gives people a reason to stop and look.", items:"Project storytelling, photography and film direction, social content, copywriting, case studies"},
  {t:"Digital and communications", when:"A website and channels that hold up when an architect, designer or client looks you up before a meeting, and help the right people find you.", items:"Website direction and copy, LinkedIn and Instagram, email and newsletters, SEO foundations, PR and award entries"},
  {t:"Campaigns and launches", when:"Launches and campaigns with a clear idea at the centre: new schemes, new collections, showroom openings and the moments that matter in the design calendar.", items:"Launch planning, campaign concepts, product launches, events and exhibitions, sales and bid support"},
  {t:"Ongoing marketing management", when:"Consistent, high-quality marketing activity, month after month, so momentum builds rather than stalls.", items:"Planning and delivery, supplier coordination, scheduling, reporting, regular strategic reviews"},
];

const WORK = [
  {
    slug:"victoria-stone", client:"Victoria Stone", sector:"Premium stone and fireplaces",
    strap:"Giving a beautifully made product the positioning it deserves.",
    disc:"Positioning · Content · Digital · Marketing support",
    hero:{frame:"Victoria Stone photography, awaiting permission"}, small:{frame:"Victoria Stone product detail, awaiting permission"},
    meta:{Sector:"Premium stone and fireplaces", Services:<V>Positioning, content, digital and marketing support</V>, Relationship:<V>Ongoing partnership</V>},
    intro:<>Victoria Stone designs and makes premium stone fireplaces. <V>Add an approved description of the business, its heritage and its customers.</V></>,
    context:<>A fireplace is a considered purchase, often made alongside an architect or interior designer. The marketing has to work for homeowners and for the professionals advising them. <V>Confirm audiences with Victoria Stone.</V></>,
    challenge:"The craft was never in question. The opportunity was to make the brand feel as considered as the product, and to keep it visible consistently rather than in bursts.",
    approach:<>We started with positioning, clarifying what makes the product distinct and who it is really for. From there we built content and digital activity around the materials, the making and the rooms the fireplaces live in. <V>Detail the specific approach once approved.</V></>,
    statement:"The product was already exceptional. The job was to make sure the right people saw it in the right light.",
    work:["Brand positioning support","Product and lifestyle content","Digital marketing","Ongoing marketing support"],
    gallery:[{frame:"Victoria Stone interior photography",ar:"ar-32"},{frame:"Victoria Stone material detail",ar:"ar-45"},{frame:"Victoria Stone product photography",ar:"ar-11"},{frame:"Victoria Stone room setting",ar:"ar-34"}],
  },
  {
    slug:"ksr", client:"KSR Architects", sector:"Architecture",
    strap:"Turning an exceptional portfolio into stories people want to follow.",
    disc:"Project storytelling · Content · Film · Communications",
    hero:{frame:"KSR project photography to come"}, small:{frame:"KSR film still to come"},
    meta:{Sector:"Architecture practice", Location:<V>London</V>, Services:<V>Content, film and communications</V>, Relationship:<V>Ongoing partnership</V>},
    intro:<>KSR Architects is an architecture practice with a portfolio that speaks for itself, if you know where to look. <V>Add an approved one-line description of the practice.</V></>,
    context:<>Practices like KSR are busy designing and delivering. Marketing tends to happen in the gaps between projects, which makes it inconsistent even when the work is outstanding. <V>Confirm the business context with KSR.</V></>,
    challenge:"The opportunity was to show the thinking behind the buildings, not only the finished photographs, and to do it consistently enough that people began to recognise the practice's voice.",
    approach:<>We treat each project as a story with a decision worth explaining, working closely with the team to find the angle in every scheme, then planning content that can live across social, film and wider communications. <V>Detail the specific approach once approved.</V></>,
    statement:"The buildings were already remarkable. The stories behind them were the part nobody was telling.",
    work:["Project storytelling content","Film direction and editing support","Social media content and copy","Wider communications support"],
    gallery:[{frame:"KSR exterior photography",ar:"ar-32"},{frame:"KSR interior detail",ar:"ar-45"},{frame:"KSR film still",ar:"ar-11"},{frame:"KSR social content",ar:"ar-34"}],
  },
];

/* =========================================================
   PRIMITIVES
   ========================================================= */
function Photo({k, cap, ar="ar-45", className="", eager, alt, note}){
  return <figure className={"ph "+className} data-ph>
    <div className={"ph-i "+ar}><img src={IMG[k]} alt={alt || (cap ? cap+"" : "Temporary image")}/></div>
    {cap!==false && !String(k).startsWith("c_") && <figcaption className="cap"><span>{cap}</span><i>{note||""}</i></figcaption>}
  </figure>;
}
function Frame({label, ar="ar-45", dark, className=""}){
  return <figure className={"ph frame "+(dark?"dk ":"")+className} data-ph role="img" aria-label={"Placeholder: "+label}>
    <div className={"ph-i "+ar}><span>{label}</span></div>
    <figcaption className="cap"><span>Placeholder</span></figcaption>
  </figure>;
}
const Pic = ({p, ar, dark, className, eager}) => p.frame ? <Frame label={p.frame} ar={ar} dark={dark} className={className}/> : <Photo k={p.k} cap={p.cap} note={p.note} ar={ar} className={className} eager={eager}/>;
const ArrUp = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>;
const Arrow = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>;
const Ln = ({children}) => <span className="ln"><span>{children}</span></span>;

const Flourish = ({className=""}) => <svg className={"fl "+className} viewBox="0 0 400 60" aria-hidden="true"><path pathLength="1" d="M4 36 C 70 16 170 10 262 24 C 312 32 318 54 290 54 C 264 54 268 28 312 21 C 340 17 372 23 396 31"/></svg>;

function Btn({to, light, sm, children, ...p}){
  const cls = "btn"+(light?" btn-light":"")+(sm?" btn-sm":"");
  const inner = <><span className="lab">{children}</span><span className="arr"><Arrow/></span></>;
  return to ? <L to={to} className={cls} {...p}>{inner}</L> : <button className={cls} {...p}>{inner}</button>;
}

function useRoute(){
  const read = () => (location.hash || "#home").slice(1) || "home";
  const [route,setRoute] = useState(read);
  useEffect(()=>{const f=()=>setRoute(read()); addEventListener("hashchange",f); return ()=>removeEventListener("hashchange",f);},[]);
  return route;
}
const L = ({to,children,...p}) => <a href={"#"+to} {...p}>{children}</a>;
function store(key,val){try{ if(val===undefined) return localStorage.getItem(key); localStorage.setItem(key,val);}catch(e){return null;}}

/* =========================================================
   LAYOUT
   ========================================================= */
const MENU = [
  {id:"home", label:"Home", img:"c_hero"},
  {id:"approach", label:"Approach", img:"c_lens"},
  {id:"expertise", label:"Expertise", img:"c_curve"},
  {id:"about", label:"About", img:"c_stones"},
  {id:"contact", label:"Contact", img:"c_phones"},
];

function Header({route}){
  const [open,setOpen] = useState(false);
  const section = route.split("-")[0];
  const curIdx = Math.max(0, MENU.findIndex(m=>m.id===section));
  const [img,setImg] = useState(curIdx);
  const menuRef = useRef(), btnRef = useRef(), wasOpen = useRef(false);
  useEffect(()=>{setOpen(false);},[route]);
  useEffect(()=>{setImg(curIdx);},[curIdx,open]);
  useEffect(()=>{
    const m = menuRef.current; if(!m) return;
    if(open){
      wasOpen.current = true;
      document.body.style.overflow="hidden";
      setTimeout(()=>{ const a = m.querySelector('a[aria-current="page"]') || m.querySelector("a"); a && a.focus({preventScroll:true}); }, 80);
    } else {
      document.body.style.overflow="";
      if(wasOpen.current){ wasOpen.current=false; btnRef.current && btnRef.current.focus({preventScroll:true}); }
    }
  },[open]);
  const onKey = e => {
    if(e.key==="Escape"){ e.preventDefault(); setOpen(false); return; }
    if(e.key==="Tab"){
      const f = menuRef.current.querySelectorAll("a,button"); const first=f[0], last=f[f.length-1];
      if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
    }
  };
  return <>
    <header className="hdr">
      <div className="wrap">
        <L to="home" className="logo" aria-label="Flourish Communications, home"><img className="lg-d" src={IMG.logo_plum} alt="Flourish"/><img className="lg-l" src={IMG.logo_bone} alt="Flourish"/></L>
        <div className="acts">
          <Btn to="contact" sm>Let's talk</Btn>
          <button ref={btnRef} className="menubtn" aria-expanded={open} aria-controls="site-menu" onClick={()=>setOpen(true)}>Menu <span className="bars" aria-hidden="true"></span></button>
        </div>
      </div>
    </header>
    <div ref={menuRef} id="site-menu" className={"menu"+(open?" open":"")} role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open} inert={open?undefined:""} onKeyDown={onKey}>
      <div className="stage" aria-hidden="true">
        {MENU.map((m,i)=> <img key={m.id} src={IMG[m.img]} alt="" className={i===img?"on":""}/>)}
        <p>{MENU[img].label}</p>
      </div>
      <div className="side">
        <div className="top"><img src={IMG.logo_bone} alt="Flourish"/><button className="menubtn x" style={{color:"var(--bone)"}} onClick={()=>setOpen(false)} aria-label="Close menu">Close <span className="bars" aria-hidden="true"></span></button></div>
        <ol onMouseLeave={()=>setImg(curIdx)}>
          {MENU.map((m,i)=> <li key={m.id}><L to={m.id} aria-current={section===m.id?"page":undefined} onMouseEnter={()=>setImg(i)} onFocus={()=>setImg(i)} onClick={()=>setOpen(false)}>
            <span className="n">0{i+1}</span><span className="t">{m.label}</span>{section===m.id ? <span className="cur">Current page</span> : <span></span>}
          </L></li>)}
        </ol>
        <div className="mfoot">
          <p><b>Got something in mind?</b>hello@flourishcomms.co.uk</p>
          <Btn to="contact" light onClick={()=>setOpen(false)}>Start a conversation</Btn>
        </div>
      </div>
    </div>
  </>;
}

function Footer(){
  return <footer className="foot">
    <div className="wrap">
      <div className="grid">
        <div><img className="flogo" src={IMG.logo_bone} alt="Flourish Communications"/><p className="muted" style={{maxWidth:"30ch"}}>Strategic marketing for luxury property and design.</p></div>
        <div><p className="label">Explore</p><ul>{NAV.map(n=><li key={n.id}><L to={n.id}>{n.label}</L></li>)}<li><L to="contact">Contact</L></li></ul></div>
        <div><p className="label">Contact</p><ul><li>hello@flourishcomms.co.uk</li></ul></div>
        <div><p className="label">Follow</p><ul><li><V>LinkedIn</V></li><li><V>Instagram</V></li></ul></div>
      </div>
      <div className="small">
        <span>© 2026 Flourish Communications</span>
        
        <span>Privacy policy to follow</span>
        <span>Prototype for review.</span>
      </div>
      <p className="wink">Thanks for scrolling all the way down here. We notice these things.</p>
    </div>
  </footer>;
}

/* =========================================================
   HOMEPAGE HEROES
   ========================================================= */
function Hero(){
  return <section className="hero" data-tone="sand" aria-labelledby="h-hero">
    <div className="img"><img src={IMG.c_hero} alt="A monumental terracotta leather flower sculpture set in a sunlit stone archway" /></div>
    <div className="wrap">
            <h1 id="h-hero" tabIndex="-1"><Ln>Built to</Ln><Ln>make an</Ln><Ln>impact.</Ln></h1>
      <div className="hrow fade-in">
        <p className="lede">Strategy, creativity and marketing<br/>delivery for the designers and<br/>craftspeople behind exceptional<br/>homes and buildings, and the<br/>teams who bring them to life.</p>
        <div className="btns"><Btn to="approach">Explore our approach</Btn><L to="contact" className="ulink">Let's talk <ArrUp/></L></div>
      </div>
    </div>
  </section>;
}

function Statement(){
  return <section className="sec tone stmt" data-tone="clay" aria-labelledby="h-state">
    <div className="wrap">
      <h2 id="h-state" className="mega">Good thinking. <span style={{display:"block"}}>Beautiful <em className="it">execution.</em></span></h2>
      <div className="st-grid">
        <Photo k="c_light" ar="ar-45" className="sv" alt="A camera displayed in a niche in a dark wall"/>
        <div className="body rise">
          <p className="d-s" style={{fontWeight:380}}>Great marketing starts with understanding the business behind it. What makes it different. Who it needs to reach. And what will make people pay attention.</p>
          <p>We bring strategy, creative thinking and consistent delivery together, building marketing that looks good, makes sense and works hard for your business.</p>
          <p><L to="approach" className="ulink">How we work <ArrUp/></L></p>
        </div>
      </div>
    </div>
  </section>;
}

function Volume(){
  const [v,setV] = useState(6);
  const aside = v<=2 ? "Sorry, didn't quite catch that." : v>=11 ? "There you are." : "";
  return <section className="volume" data-tone="green" style={{"--v":(v-1)/10}} aria-labelledby="h-vol">
    <img className="bg" src={IMG.c_megaphone} alt="A green megaphone mounted on a green wall"/>
    <div className="wrap">
      <h2 id="h-vol"><span className="whisper it">Quietly brilliant?</span><span className="loudbox"><span className="loud">Let's turn up the volume.</span></span></h2>
      <div className="vfoot">
        <div style={{display:"grid",gap:6}}>
          <div className="ctl"><label htmlFor="vol">Volume</label><input id="vol" type="range" min="1" max="11" step="1" value={v} onChange={e=>setV(+e.target.value)} aria-valuetext={v+" out of 11"}/><output htmlFor="vol">{v}</output></div>
          <p className="aside" aria-live="polite">{aside}</p>
        </div>
        <p className="lede">Specialist businesses are often brilliant at what they do and rather quiet about it. We help the right people notice.</p>
      </div>
    </div>
  </section>;
}

const PILLAR_ART = [["c_stones","p-plum"],["c_arch","p-clay"],["c_colonnade","p-green"],["c_lens","p-bone"]];
function Pillars(){
  const [on,setOn] = useState(0);
  return <section className="sec tone pillars" data-tone="paper" aria-labelledby="h-model">
    <div className="wrap">
      <div className="head">
        <h2 id="h-model" className="mega sm">The right thinking. The right <em className="it">execution.</em></h2>
        <p className="muted">We bring together the strategic, creative and practical sides of marketing, with a clear focus on what matters to your business.</p>
      </div>
      <div className="pl">{PILLARS.map(([t,d],i)=> <article key={t} className={"p "+PILLAR_ART[i][1]+(i===on?" on":"")} tabIndex="0" onMouseEnter={()=>setOn(i)} onFocus={()=>setOn(i)} onClick={()=>setOn(i)}>
        <div className="art" aria-hidden="true"><img src={IMG[PILLAR_ART[i][0]]} alt=""/></div>
        <span className="n" aria-hidden="true">0{i+1}</span>
        <h3>{t}</h3>
        <p>{d}</p>
      </article>)}</div>
      <p style={{marginTop:36}}><L to="approach" className="ulink">Our approach <ArrUp/></L></p>
    </div>
  </section>;
}

function Specialism(){
  return <section className="sec tone spec-tone" data-tone="bone" aria-labelledby="h-spec">
    <div className="wrap spec">
      <Photo k="c_pleat" ar="ar-34" className="sv pleatcrop" alt="A pleated white facade against a blue sky"/>
      <div className="txt rise">
                <h2 id="h-spec" className="d-l">For the people who design and make exceptional places.</h2>
        <div className="prose" style={{marginTop:28}}>
          <p className="lede muted">We work with luxury property and design businesses: architects, interior designers, makers and the specialists whose craft goes into exceptional homes and buildings.</p>
        </div>
      </div>
    </div>
  </section>;
}

function Billboard(){
  const [name,setName] = useState("");
  const txt = name.trim() || "Your name here.";
  const size = Math.max(4.4, Math.min(11.5, 122/Math.max(9,txt.length)));
  return <section className="sec tone bbsec" data-tone="plum" aria-labelledby="h-cta">
    <div className="wrap bb-g">
      <div className="bbcol">
        <div className="bb"><img src={IMG.c_billboard} alt="A billboard against a pale sky"/><div className="bb-face" aria-hidden="true"><span style={{fontSize:size+"cqw"}}>{txt}</span></div></div>
        <div className="bb-ctl"><label htmlFor="bb-name">Go on, put your name up there</label><input id="bb-name" maxLength="24" value={name} onChange={e=>setName(e.target.value)} placeholder="Type your business name" autoComplete="off"/></div>
      </div>
      <div className="rt">
                <h2 id="h-cta" className="mega sm">Give people something to talk about.</h2>
        <p className="lede muted">Whether you know exactly what you need or just that something needs to change, we'd love to hear about your business.</p>
        <L to="contact" className="e1 d-xl"><span>Let's talk</span><span className="ln" aria-hidden="true"></span></L>
        <p className="addr muted">hello@flourishcomms.co.uk</p>
      </div>
    </div>
  </section>;
}

function Heard(){
  return <section className="heard" aria-labelledby="h-heard">
    <img src={IMG.c_megaphone} alt="A green megaphone mounted on a green wall" className="sv-plain"/>
    <div className="t"><div className="wrap">
      <h2 id="h-heard" className="d-xl" style={{fontSize:"clamp(2.6rem,6vw,6.2rem)"}}>Good work deserves to be seen.</h2>
      <p className="lede" style={{color:"var(--muted-l)",justifySelf:"end"}}>Specialist businesses are often brilliant at what they do and rather quiet about it. We help the right people notice.</p>
    </div></div>
  </section>;
}

/* =========================================================
   HOMEPAGE SECTIONS
   ========================================================= */
function Intro(){
  return <section className="sec intro" aria-labelledby="h-intro">
    <div className="wrap g12">
      <div className="k"><Photo k="c_light" ar="ar-23" cap={false} alt="" className="sv"/></div>
      <div className="body rise">
                <h2 id="h-intro" className="d-l">Good thinking. Beautiful execution.</h2>
        <div className="cols">
          <p className="muted">Great marketing starts with understanding the business behind it. What makes it different. Who it needs to reach. And what will make people pay attention.</p>
          <p className="muted">We bring strategy, creative thinking and consistent delivery together, building marketing that looks good, makes sense and works hard for your business.</p>
        </div>
        <p style={{marginTop:40}}><L to="approach" className="ulink">How we work <ArrUp/></L></p>
      </div>
    </div>
  </section>;
}

function Project({w, rev, dark=true}){
  return <L to={"work-"+w.slug} className={"proj"+(rev?" rev":"")} aria-label={w.client+", read the case study"}>
    <Pic p={w.hero} ar={w.hero.frame?"ar-43":"ar-45"} dark={dark} className="big sv"/>
    <div className="side">
      <Pic p={w.small} ar="ar-11" dark={dark} className="small"/>
      <div className="t">
        <p className="label muted">{w.sector}</p>
        <h3 className="d-l">{w.client}</h3>
        <p className="d-s" style={{maxWidth:"24ch"}}>{w.strap}</p>
        <p className="disc">{w.disc}</p>
        <span className="ulink" style={{justifySelf:"start",marginTop:12}}>View the work <ArrUp/></span>
      </div>
    </div>
  </L>;
}

function SelectedWork(){
  return <section className="sec tone" data-tone="night" aria-labelledby="h-work">
    <div className="wrap">
      <div className="work-head">
        <div style={{display:"grid",gap:20}}>
                    <h2 id="h-work" className="mega sm">Good work deserves<br/>to be <em className="it">seen.</em></h2>
          <p className="muted" style={{maxWidth:"46ch"}}>Project photography is on its way, with our clients' blessing. We'd rather wait and show it properly.</p>
        </div>
        <L to="work" className="ulink">All work <ArrUp/></L>
      </div>
      <Project w={WORK[0]}/>
      <Project w={WORK[1]} rev/>
    </div>
  </section>;
}

function Clients(){
  const items = CLIENTS.length ? CLIENTS : Array.from({length:8},()=>null);
  return <section className="sec tight clients tone" data-tone="plum" aria-labelledby="h-clients">
    <div className="wrap">
      <div className="head"><h2 id="h-clients" className="mega sm" style={{gridColumn:"1/-1"}}>You’re in good company</h2></div>
      {CLIENTS.length>0 && <div className="lmq"><ul className="lmq-t">{[0,1].map(r=> CLIENTS.map(c=> <li key={r+c.name} aria-hidden={r?true:undefined}><a href={c.url} target="_blank" rel="noopener noreferrer" tabIndex={r?-1:undefined} aria-label={c.name+", opens in a new tab"}><img src={c.logo} alt=""/></a></li>))}</ul></div>}
      <ul className="logos" hidden={CLIENTS.length>0} data-n={items.length} style={{marginTop:40}}>{items.map((c,j)=> <li key={j} data-ph={c?undefined:true}>{c ? <img src={c.logo} alt={c.name}/> : <span className="empty">Logo to come</span>}</li>)}</ul>
      {!CLIENTS.length && <p className="ph-note">Approved logos to be supplied by Chanel. Logos keep their natural proportions and show in monochrome where brand guidelines allow.</p>}
    </div>
  </section>;
}

function Model(){
  return <section className="sec model" aria-labelledby="h-model">
    <div className="wrap">
      <div className="g12">
        <h2 id="h-model" className="d-l head">The right thinking. The right execution.</h2>
        <div className="aside"><p className="muted">We bring together the strategic, creative and practical sides of marketing, with a clear focus on what matters to your business.</p></div>
      </div>
      <div className="cols">{PILLARS.map(([t,d],i)=> <div className="col rise" key={t}><p className="n">0{i+1}</p><h3 className="d-s">{t}</h3><p className="muted">{d}</p></div>)}</div>
      <p style={{marginTop:36}}><L to="approach" className="ulink">Our approach <ArrUp/></L></p>
    </div>
  </section>;
}

function CTA(){
  return <section className="sec dark cta" aria-labelledby="h-cta">
    <div className="wrap g">
      <div className="pic"><Photo k="c_billboard" ar="ar-45" cap={false} alt="An empty billboard against a pale sky" className="sv"/></div>
      <div className="rt">
      <h2 id="h-cta" className="d-xl">Let's talk.</h2>
      <div className="r">
        <p className="lede" style={{color:"var(--muted-l)"}}>Whether you know exactly what you need or just that something needs to change, we'd love to hear about your business. No hard sell and no forty-slide credentials deck, just a proper conversation.</p>
        <div className="btns"><Btn to="contact" light>Start a conversation</Btn></div>
        <p className="addr" style={{color:"var(--muted-l)"}}>hello@flourishcomms.co.uk</p>
      </div>
      </div>
    </div>
  </section>;
}

function Home(){
  return <>
    <Hero/>
    <Statement/>
    <Specialism/>
    <Volume/>
    <Clients/>
    <Pillars/>
    <Billboard/>
  </>;
}

/* =========================================================
   INNER PAGES
   ========================================================= */
function PageHero({label, title, lede, pic, tone="paper"}){
  return <section className="phero tone" data-tone={tone}>
    <div className="wrap phero-g">
      <div className="t">
        {label && <span className="label muted">{label}</span>}
        <h1 id="page-h1" tabIndex="-1" className="d-xl" style={{fontSize:"clamp(2.8rem,6.6vw,6.8rem)"}}>{title}</h1>
        {lede && <p className="lede muted">{lede}</p>}
      </div>
      {pic && <div className="ph reveal-load" style={{gap:0}}><Pic p={pic} ar="ar-45" eager/></div>}
    </div>
  </section>;
}

function Engagement(){
  return <section className="sec tight" aria-labelledby="h-ways">
    <div className="wrap">
      <h2 id="h-ways" className="d-l waysh">Two ways to work with us.</h2>
      <div className="ways">
        <div className="way green">
                    <h3 className="d-m">Ongoing marketing partnership</h3>
          <p className="muted">A structured retainer combining strategy, creativity and delivery, so your marketing has a clear plan and a steady rhythm.</p>
          <ul className="muted"><li>Strategic direction and regular reviews</li><li>Consistent delivery across content, campaigns and communications</li><li>Scope shaped around your priorities and budget</li></ul>
        </div>
        <div className="way cream">
                    <h3 className="d-m">Strategy and projects</h3>
          <p className="muted">For defined needs with a clear finish line. Often the start of a longer relationship, and always connected to the bigger picture.</p>
          <ul className="muted"><li>Positioning and marketing strategy</li><li>Campaigns and launches</li><li>Website direction</li></ul>
        </div>
      </div>
    </div>
  </section>;
}

const CAPS = [
  {t:"Direction", img:"c_stones", d:"A clear marketing strategy built around your commercial goals. We define your positioning and the audiences that matter, from private clients to the architects and designers who specify, then set the priorities that will make the biggest difference."},
  {t:"Creative", img:"c_arch", d:"Ideas and content that do the work justice. Campaign concepts, messaging and art direction for photography and film, so a finished scheme or a handmade piece looks as considered online as it does in person."},
  {t:"Delivery", img:"c_colonnade", d:"Consistent, high-quality activity across the channels your audience really uses: Instagram and LinkedIn, your website, newsletters, press, award entries and the launches and shows that fill the calendar."},
  {t:"Analysis", img:"c_lens", d:"Clear reporting and honest recommendations. In a market built on referral and long sales cycles, we look past the likes to the signals that matter: the right enquiries, the right introductions and a reputation that travels."},
];

function Capabilities(){
  const [on,setOn] = useState(0);
  return <section className="sec dark caps-sec" aria-labelledby="h-caps">
    <div className="wrap">
      <div className="head">
                <h2 id="h-caps" className="d-l">Everything your marketing needs, under one roof.</h2>
      </div>
      <div className="caps">
        <div className="vis" aria-hidden="true">
          <div className="stage">{CAPS.map((c,i)=> <img key={c.t} src={IMG[c.img]} alt="" className={i===on?"on":""}/>)}</div>
          <p className="now"><b>{CAPS[on].t}</b><span>0{on+1} / 04</span></p>
        </div>
        <div className="list">{CAPS.map((c,i)=> <div className={"cap-item"+(i===on?" on":"")} key={c.t}>
          <button aria-expanded={i===on} aria-controls={"cap-"+i} onClick={()=>setOn(i)} onMouseEnter={()=>setOn(i)} onFocus={()=>setOn(i)}>
            <span className="n">0{i+1}</span><span className="t">{c.t}</span>
          </button>
          <div className="d" id={"cap-"+i}><div><div className="inner">
            <img className="mob" src={IMG[c.img]} alt=""/>
            <p>{c.d}</p>
          </div></div></div>
        </div>)}</div>
      </div>
    </div>
  </section>;
}

function Approach(){
  const faqs=[
    ["What types of businesses do you work with?","We specialise in luxury property and design. Our clients are architects, interior designers, craftspeople and makers, and the specialist teams who work alongside them."],
    ["Do you work with competing businesses?","We believe in giving our clients a genuine competitive advantage, which is why we don't work with direct competitors. We love working with complementary businesses, though, and making connections across our network wherever there's an opportunity."],
    ["Do you offer ongoing support or individual projects?","Both. We provide ongoing marketing partnerships as well as focused projects, depending on your objectives and what your business needs."],
    ["Can you work alongside an existing marketing team?","Yes. We can complement your existing capabilities, providing additional expertise, creative support or capacity where it will make the biggest difference."],
    ["How do you measure success?","We agree what success looks like at the outset, then use relevant performance data and regular reviews to understand what's working and where to improve."],
    ["How do we get started?","We begin with a conversation about your business, your goals and where marketing could make the biggest difference. From there, we recommend an appropriate approach."],
  ];
  return <>
    <PageHero tone="clay" title="A senior marketing team, without building one in-house." lede="We work as an extension of your business, bringing strategy, creativity and consistent delivery together around one clear plan." pic={{k:"c_lens",cap:"Temporary image",note:"Licence to confirm"}}/>
    <Capabilities/>
    <Engagement/>
    <section className="sec tight boneband" aria-labelledby="h-process">
      <div className="wrap">
        <div className="split" style={{marginBottom:48}}><h2 id="h-process" className="d-l">How we work together.</h2></div>
        <ol className="steps">{PROCESS.map(([t,d],i)=> <li key={t}><span className="n">0{i+1}</span><h3 className="d-s">{t}</h3><p className="muted">{d}</p></li>)}</ol>
      </div>
    </section>
    <section className="sec tight" aria-labelledby="h-faq">
      <div className="wrap split">
        <h2 id="h-faq" className="d-m">Questions people ask</h2>
        <div className="faq">{faqs.map(([q,a])=> <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div>
    </section>
    <CTA/>
  </>;
}

function Expertise(){
  return <>
    <section className="exphero" data-tone="bone" aria-labelledby="page-h1">
      <div className="img"><img src={IMG.c_mirrors} alt="A sunlit wall of assorted vintage mirrors in coral, green and cream frames"/></div>
      <div className="wrap">
        <h1 id="page-h1" tabIndex="-1" className="d-xl" style={{fontSize:"clamp(2.8rem,6.6vw,6.8rem)"}}>Organised around what you need.</h1>
        <p className="lede muted">Six areas of expertise, brought together around what your business needs. Most clients draw on several at once, which is where joined-up thinking makes the biggest difference.</p>
      </div>
    </section>
    <section className="sec tight" style={{paddingTop:0}}>
      <div className="wrap rows">
        {EXPERTISE.map((e,i)=> <article className="row rise" key={e.t} aria-labelledby={"x"+i}>
          <h2 id={"x"+i} className="d-m">{e.t}</h2>
          <p>{e.when}</p>
          <p className="inc">{e.items}</p>
        </article>)}
      </div>
    </section>
    <CTA/>
  </>;
}

function WorkIndex(){
  return <>
    <PageHero title="Good work deserves to be seen." lede="A selection of the businesses we work with and the work we've done together. Every story is told with our clients' approval, and we only share results we can stand behind. Project photography will be added once permissions are in place."/>
    <section className="sec dark">
      <div className="wrap">
        <div className="wlist"><Project w={WORK[0]}/><Project w={WORK[1]} rev/></div>
        <div className="wfuture">
          <Frame label="Future case study · interior design practice" ar="ar-32" dark/>
          <Frame label="Future case study · craftsperson or maker" ar="ar-32" dark/>
        </div>
      </div>
    </section>
    <CTA/>
  </>;
}

function CaseStudy({w}){
  const next = WORK[(WORK.indexOf(w)+1)%WORK.length];
  const secs=[["The client",w.intro],["The context",w.context],["The opportunity",w.challenge],["Our approach",w.approach]];
  return <>
    <section className="cs-hero">
      <div className="wrap">
        <p className="label muted">Case study · {w.sector}</p>
        <h1 id="page-h1" tabIndex="-1" className="d-xl">{w.client}</h1>
      </div>
      <div className="wrap reveal-load"><Pic p={w.hero.frame?w.hero:{...w.hero}} ar="ar-21" eager/></div>
      <div className="wrap"><dl className="cs-meta">{Object.entries(w.meta).map(([k,v])=> <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></div>
    </section>
    <section>
      <div className="wrap">
        <p className="statement rise">{w.statement}</p>
        <p className="ph-note" style={{marginTop:-40,marginBottom:40}}>Draft statement for client approval.</p>
        {secs.map(([h,c])=> <div className="cs-sec rise" key={h}><h2 className="d-s">{h}</h2><div className="prose"><p>{c}</p></div></div>)}
        <div className="cs-sec rise"><h2 className="d-s">The work</h2><div className="prose"><ul>{w.work.map(x=><li key={x}>{x}</li>)}</ul><p className="ph-note">Confirm the exact scope delivered with the client.</p></div></div>
      </div>
      <div className="wrap gallery">{w.gallery.map((g,i)=> <Pic key={i} p={g} ar={g.ar} className="sv"/>)}</div>
      <div className="wrap">
        <div className="cs-sec"><h2 className="d-s">Outcomes</h2><div className="pending"><b>Awaiting verified outcomes</b><span className="muted">We only publish results the client has confirmed. Add observations or figures here once approved.</span></div></div>
        <div className="cs-sec" style={{borderBottom:0}}><h2 className="d-s">In their words</h2><div className="pending"><b>Awaiting an approved testimonial</b><span className="muted">Add a short quote with name and role once the client has signed it off.</span></div></div>
      </div>
    </section>
    <section className="sec dark tight">
      <div className="wrap split" style={{alignItems:"end"}}>
        <div style={{display:"grid",gap:16}}><L to={"work-"+next.slug} className="e1 d-l"><span>{next.client}</span><span className="ln" aria-hidden="true"></span></L></div>
        <div style={{display:"grid",gap:24,justifyItems:"start"}}><p className="lede" style={{color:"var(--muted-l)"}}>Is your best work getting the attention it deserves?</p><Btn to="contact" light>Let's talk</Btn></div>
      </div>
    </section>
  </>;
}

function About(){
  const values=[
    ["Stay curious.","Ask better questions. Challenge assumptions. Understand what makes people tick. The best ideas rarely come from taking things at face value."],
    ["Give people something to talk about.","We believe marketing should make people stop, think, feel or do something. Otherwise, what's the point?"],
    ["Care beyond the brief.","We get genuinely invested in the businesses we work with. Your ambitions, challenges and successes matter to us."],
    ["Get things done.","Brilliant ideas are only brilliant if they see the light of day. We believe in getting stuck in, making things happen and seeing them through."],
    ["Never stop getting better.","There's always more to learn, another idea to explore and a better way of doing things. That's what makes marketing so interesting."],
  ];
  return <>
    <section className="abouthero" data-tone="peach" aria-labelledby="page-h1">
      <div className="img"><img src={IMG.c_bombwide} alt="A purple cartoon bomb on a peach background"/></div>
      <div className="wrap">
        <h1 id="page-h1" tabIndex="-1" className="d-xl" style={{fontSize:"clamp(2.8rem,6.6vw,6.8rem)"}}>Good marketing starts with curiosity.</h1>
        <p className="lede muted">We’re fascinated by what makes people stop, think, feel and act. We combine that curiosity with strategic thinking, creative ideas and a determination to get things done.</p>
      </div>
    </section>
    <section className="sec tight" aria-labelledby="h-story">
      <div className="wrap founder">
        <Photo k="c_chanel" ar="ar-45" cap={false} className="sv" alt="Chanel Cullen, founder of Flourish Communications"/>
        <div className="txt prose rise">
          <h2 id="h-story" className="d-l">Why Flourish exists.</h2>
          <p>Flourish began with a simple observation. Some of the best businesses around, with real craft, real expertise and loyal clients, had marketing that didn't come close to reflecting them.</p>
          <p>We set out to change that, with marketing that is strategically sound, creatively ambitious and delivered consistently.</p>
          <p>Flourish was founded by Chanel Cullen, who leads the agency's strategy, creative direction and client relationships. She works alongside a wider team of experienced marketing professionals, bringing the right expertise to each piece of work.</p>
          <p className="ph-note">Add Chanel's background here once confirmed. Avoid years-of-experience claims unless verified.</p>
        </div>
      </div>
    </section>
    <section className="sec dark" aria-labelledby="h-people">
      <div className="wrap spec">
        <Photo k="c_light" cap={false} alt="" ar="ar-45" className="sv"/>
        <div className="txt prose">
                    <h2 id="h-people" className="d-l">Senior people on every account.</h2>
          <p style={{color:"var(--muted-l)"}}>Every client works with experienced marketing professionals, including content specialists, designers and digital experts, brought together around what each piece of work needs.</p>
          <p style={{color:"var(--muted-l)"}}>We can offer that because of how Flourish is built. Many of our team built careers in agencies and in-house teams, then found that traditional working patterns didn't fit around family life. Through the <V>Marketing Mums Network</V>, they do excellent work, flexibly.</p>
          <p style={{color:"var(--muted-l)"}}>You get brilliant, experienced people. We get a team that chose to be here.</p>
          <p className="ph-note">Confirm how the team and the network are described publicly.</p>
        </div>
      </div>
    </section>
    <section className="sec tight" style={{paddingBottom:0}}><div className="wrap"><Photo k="c_stones" cap={false} alt="" ar="ar-21" className="sv"/></div></section>
    <section className="sec tight" aria-labelledby="h-values">
      <div className="wrap">
        <div className="split" style={{marginBottom:48}}><div style={{display:"grid",gap:24}}><h2 id="h-values" className="d-l">Think differently.<br/>Make things happen.</h2><p className="lede muted" style={{maxWidth:"52ch"}}>We're curious by nature, creative by choice and commercially minded in everything we do.</p></div></div>
        <div className="rows">{values.map(([t,d])=> <div className="row two rise" key={t}><h3 className="d-s">{t}</h3><p className="muted">{d}</p></div>)}</div>
      </div>
    </section>
    <CTA/>
  </>;
}

const SUPPORT = ["Ongoing marketing partnership","Strategy or a defined project","Brand and positioning","A launch or campaign","Not sure yet, I'd like to talk it through"];
function Field({k,label,children,opt,errs}){
  return <div className="field" data-err={!!errs[k]}>
    <label htmlFor={"f-"+k}>{label} {opt && <span className="opt">(optional)</span>}</label>{children}
    {errs[k] && <p className="err" id={"e-"+k}>{errs[k]}</p>}
  </div>;
}

function Contact(){
  const blank={name:"",business:"",email:"",message:""};
  const [f,setF] = useState(blank);
  const [errs,setErrs] = useState({});
  const [sent,setSent] = useState(false);
  const refs = {name:useRef(),business:useRef(),email:useRef()};
  const validate = v => {
    const e={};
    if(!v.name.trim()) e.name="We’d love to know who we’re talking to.";
    if(!v.business.trim()) e.business="Tell us the name of your business.";
    if(!v.email.trim()) e.email="We’ll need an email address to reply.";
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email="That email doesn’t look quite right. Mind checking it?";
    return e;
  };
  const set = k => ev => {const v={...f,[k]:ev.target.value}; setF(v); if(errs[k]) setErrs(validate(v));};
  const [sending,setSending] = useState(false);
  const submit = ev => {
    ev.preventDefault();
    const e=validate(f); setErrs(e);
    const first=["name","business","email"].find(k=>e[k]);
    if(first){ const el=refs[first].current; el && el.focus(); return; }
    setSending(true);
    fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},
      body:new URLSearchParams({"form-name":"contact",name:f.name,business:f.business,email:f.email,message:f.message}).toString()})
      .then(r=>{ if(!r.ok) throw new Error(r.status); setSent(true); })
      .catch(()=> setErrs({form:"Sorry, that didn\u2019t send. Please email us at hello@flourishcomms.co.uk."}))
      .finally(()=> setSending(false));
  };
  return <>
    <section className="ct" data-tone="clay">
      <div className="wrap ct-g">
        <div className="intro">
          <h1 id="page-h1" tabIndex="-1">Let’s talk.</h1>
          <div className="say">
            <p>Tell us about your business, your ambitions and what you’ve got in mind. Whether you’ve got a big idea or don’t quite know where to start, we’d love to hear from you.</p>
            <p className="coffee">Even better, let’s grab a coffee.</p>
          </div>
        </div>
        <figure className="ct-pic"><img src={IMG.c_phones} alt="Rows of cream vintage rotary telephones on a soft pink background, receivers off the hook"/></figure>
        <div className="fm">
          {sent ? <div className="ct-yay" role="status" tabIndex="-1" ref={el=>el&&el.focus()}>
            <h2 className="d-l">Hello, {f.name.trim().split(" ")[0]}.</h2>
            <p>Lovely to hear from you. We’ll be in touch very soon.</p>
            <div><Btn onClick={()=>{setSent(false);setF(blank);}}>Start again</Btn></div>
          </div> :
          <form noValidate onSubmit={submit} aria-label="Say hello">
            <Field errs={errs} k="name" label="Your name"><input id="f-name" ref={refs.name} autoComplete="name" value={f.name} onChange={set("name")} aria-invalid={!!errs.name} aria-describedby={errs.name?"e-name":undefined}/></Field>
            <Field errs={errs} k="business" label="Business name"><input id="f-business" ref={refs.business} autoComplete="organization" value={f.business} onChange={set("business")} aria-invalid={!!errs.business} aria-describedby={errs.business?"e-business":undefined}/></Field>
            <Field errs={errs} k="email" label="Email address"><input id="f-email" ref={refs.email} type="email" autoComplete="email" value={f.email} onChange={set("email")} aria-invalid={!!errs.email} aria-describedby={errs.email?"e-email":undefined}/></Field>
            <Field errs={errs} k="message" label="What’s on your mind?"><textarea id="f-message" rows="3" value={f.message} onChange={set("message")} placeholder="Big ideas, little ideas, no idea yet..."/></Field>
            {errs.form && <p className="err" role="alert">{errs.form}</p>}
            <div><Btn type="submit" disabled={sending}>{sending ? "Sending\u2026" : "Say hello"}</Btn></div>
            <p className="fine">We’ll only use your details to reply to you. <V>Privacy policy</V></p>
          </form>}
        </div>
      </div>
    </section>
    <section className="ct-mail" data-tone="plum" aria-label="Email us">
      <div className="wrap">
        <p>Not a form person?</p>
        <a className="mail" href="mailto:hello@flourishcomms.co.uk">hello@flourishcomms.co.uk</a>
      </div>
    </section>
  </>;
}

function NotFound(){
  return <PageHero title="This page seems to have wandered off." lede={<L to="home" className="ulink">This way to the homepage <ArrUp/></L>} pic={{k:"c_arrow",cap:"Temporary image",note:"Licence to confirm"}}/>;
}

/* =========================================================
   APP
   ========================================================= */
/* Work page is switched off for now. Set to true (and add it back to NAV and MENU) to restore it. */
const SHOW_WORK = false;
function App(){
  const route = useRoute();
  const [review,setReview] = useState(()=> store("fl-review")==="1");
  const [tools,setTools] = useState(()=> store("fl-tools")==="1");
  useEffect(()=>{
    const k = e => { const tag=(e.target.tagName||"").toLowerCase(); if(e.shiftKey && (e.key==="R"||e.key==="r") && !["input","textarea","select"].includes(tag)){ setTools(v=>{ const n=!v; store("fl-tools",n?"1":"0"); if(!n) setReview(false); return n; }); } };
    addEventListener("keydown",k); return ()=>removeEventListener("keydown",k);
  },[]);
  const first = useRef(true);
  useEffect(()=>{document.body.classList.toggle("review",review && tools); store("fl-review",review?"1":"0");},[review,tools]);
  useEffect(()=>{
    window.scrollTo(0,0);
    if(first.current){first.current=false; return;}
    const h=document.getElementById("page-h1")||document.getElementById("h-hero");
    h && h.focus({preventScroll:true});
  },[route]);
  useEffect(()=>{
    const els=[...document.querySelectorAll("main > section, main > div")];
    const set=t=>{ t="paper"; document.body.dataset.tone=t; document.body.dataset.ink=["green","night","plum"].includes(t)?"light":"dark"; };
    set((els[0] && els[0].dataset.tone) || "paper");
    if(!els.length || !("IntersectionObserver" in window)) return;
    const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) set(e.target.dataset.tone||"paper"); }),{rootMargin:"-50% 0px -50% 0px",threshold:0});
    els.forEach(e=>io.observe(e));
    return ()=>io.disconnect();
  },[route]);
  let page;
  if(route==="home") page=<Home/>;
  else if(route==="approach") page=<Approach/>;
  else if(route==="expertise") page=<Expertise/>;
  else if(SHOW_WORK && route==="work") page=<WorkIndex/>;
  else if(SHOW_WORK && route.startsWith("work-")){const w=WORK.find(x=>"work-"+x.slug===route); page=w?<CaseStudy w={w}/>:<NotFound/>;}
  else if(route==="about") page=<About/>;
  else if(route==="contact") page=<Contact/>;
  else page=<NotFound/>;
  return <>
    <a href="#main" className="skip" onClick={e=>{e.preventDefault(); document.getElementById("main").focus();}}>Skip to content</a>
    <Header route={route}/>
    <main id="main" tabIndex="-1" key={route} style={{outline:"none"}}>{page}</main>
    <Footer/>
    <button className="review-btn" hidden={!tools} aria-pressed={review} onClick={()=>setReview(!review)}><span className="dot" aria-hidden="true"></span>Review notes {review?"on":"off"}</button>
  </>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
