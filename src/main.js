import './style.css'

// Converts a string-array pixel grid into an inline SVG
function toSVG(rows, palette, px) {
  const h = rows.length, w = rows[0].length
  let rects = ''
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      const ch = rows[r][c]
      if (ch === '.' || !palette[ch]) continue
      rects += `<rect x="${c * px}" y="${r * px}" width="${px}" height="${px}" fill="${palette[ch]}"/>`
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w * px}" height="${h * px}" style="image-rendering:pixelated;display:block">${rects}</svg>`
}


// ── DATA ─────────────────────────────────────────────────────────────────
const skills = [
  { name: 'Python', icon: '⚔️', level: 80, color: 'is-warning' },
  { name: 'Java',  icon: '🛡️', level: 90, color: 'is-success' },
  { name: 'Git/GitHub',         icon: '📜', level: 90, color: 'is-warning' },
  { name: 'React',       icon: '🔮', level: 70, color: 'is-primary' },
  { name: 'Node.js',         icon: '📜', level: 80, color: 'is-warning' },
  { name: 'Spring',     icon: '🌲', level: 75, color: 'is-success' },
  { name: 'SQL',         icon: '🗝️', level: 75, color: 'is-primary' },
  { name: 'LangChain',         icon: '🧙', level: 50, color: 'is-primary' },
  { name: 'Docker/Kubernetes', icon: '⚓', level: 60, color: 'is-success' },
]

const projects = [
  {
    tag: 'Tennis Court Reservation System',
    title: 'Backhand Booking ',
    stack: '[Full-Stack]',
    desc: 'Tennis Court Reservation System developed with PHP, MySQL and React. ',
    demo: 'https://github.com/toxortcs02/canchas-app',
    code: 'https://github.com/toxortcs02/canchas-app',
  },
  {
    tag: 'League Tracker',
    title: 'Result tracker',
    stack: '[Full-Stack]',
    desc: 'A web app for tracking and visualizing results of a League of Legends team, built with TypeScript, React, and plpgSQL.',
    demo: 'https://fake-clan.vercel.app/', code: 'https://fake-clan.vercel.app/',
  },
  {
    tag: 'BATTLE',
    title: 'SIEGE ENGINE',
    stack: '[Full-Stack]',
    desc: 'Turn-based siege warfare in the browser — command trebuchets, knights, and archers.',
    demo: '#', code: '#',
  },

]

// ── RENDER ───────────────────────────────────────────────────────────────
document.querySelector('#app').innerHTML = `
<nav>
  <span class="nav-logo">⚔ THE CODE KEEP<span class="blink">_</span></span>
  <ul class="nav-links">
    <li><a href="#skills">SKILLS</a></li>
    <li><a href="#projects">QUESTS</a></li>
    <li><a href="#about">LORE</a></li>
    <li><a href="#contact">SUMMON</a></li>
  </ul>
</nav>

<section id="hero">
  <div class="hero-sprites">

    <div class="hero-center">
      <h1 class="hero-title">TOMAS SABELLA<span class="blink">_</span></h1>
      <p class="hero-subtitle">✦ BACKEND DEVELOPER ✦</p>
      <p class="hero-desc">
Full-stack developer with a focus on backend development, specializing in Python, Java, Spring, and microservices in high-demand banking environments. Interested in integrating AI into real-world systems and building scalable solutions.      </p>
      <div class="cta-group">
        <a href="#projects" class="nes-btn is-warning">⚔ VIEW QUESTS</a>
        <a href="#contact"  class="nes-btn is-primary">✦ SUMMON ME</a>
      </div>
    </div>

  </div>
</section>

<p class="divider">✦ · · · ⚔ · · · ✦</p>

<section id="skills">
  <h2 class="section-title">⚔ SKILLS OF THE REALM</h2>
  <div class="skills-grid">
    ${skills.map(s => `
    <div class="nes-container skill-card">
      <div class="skill-header"><span>${s.icon}</span><span>${s.name}</span></div>
      <progress class="nes-progress ${s.color}" value="${s.level}" max="100"></progress>
    </div>`).join('')}
  </div>
</section>

<p class="divider">✦ · · · ⚔ · · · ✦</p>

<section id="projects">
  <h2 class="section-title">📜 THE QUEST BOARD</h2>
  <div class="projects-grid">
    ${projects.map(p => `
    <div class="nes-container project-card">
      <span class="project-badge">${p.tag}</span>
      <h3 class="project-title">${p.title}</h3>
      <h3 class="project-title">${p.stack}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-links">
        <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="nes-btn is-warning" style="font-size:9px;padding:8px 12px">▶ DEMO</a>
        <a href="${p.code}" target="_blank" rel="noopener noreferrer" class="nes-btn"            style="font-size:9px;padding:8px 12px">{ CODE }</a>
      </div>
    </div>`).join('')}
  </div>
</section>

<p class="divider">✦ · · · ⚔ · · · ✦</p>

<section id="about">
  <h2 class="section-title">📖 THE LORE</h2>
  <div class="about-grid">
    <div class="nes-container" style="padding:28px">
      <p class="about-text">
        En los días previos a los plazos de entrega, un joven aprendiz descubrió las artes arcanas
        de la programación a través de mundos pixelados y melodías orientales. <br><br>
        Ahora, convertido en un experimentado caballero del código, maneja Java y python como dos dagas mortales   y
        despliega contenedores con la precisión de un comandante de asedio.<br><br>
        Cuando no está defendiendo el reino de la deuda técnica, se le puede encontrar
        iluminando manuscritos (redactando documentación) o formando a jóvenes escuderos.
      </p>
    </div>
    <div class="nes-container" style="padding:28px">
      <table class="stat-table">
        <tr><td>⚔ CLASS</td>       <td>Full-Stack developer</td></tr>
        <tr><td>XP</td> <td>2 Años</td></tr>
        <tr><td>🔮 SPELLS</td>     <td>JAVA/PYTHON/C#</td></tr>
        <tr><td>🛡 GREMIO</td>      <td>Programador</td></tr>
        <tr><td>✦ STATUS</td>      <td style="color:#4a8c42">AVAILABLE ✔</td></tr>
      </table>
    </div>
  </div>
</section>

<p class="divider">✦ · · · ⚔ · · · ✦</p>

<section id="contact">
  <h2 class="section-title" style="justify-content:center;text-align:center">CONTACT</h2>
  <div class="nes-container contact-box">
    <p>Dost thou seek a valiant developer for thine next great endeavour?<br>
       Dispatch a raven and I shall ride forth post-haste.</p>
    <div class="contact-links">
      <a href="https://github.com/toxortcs02"     target="_blank" class="nes-btn">GITHUB</a>
      <a href="https://www.linkedin.com/in/tomas-sabella/"    target="_blank" class="nes-btn is-primary">LINKEDIN</a>
      <button id="mail-btn" class="nes-btn is-error">✉ MAIL</button>
    </div>
  </div>
</section>

<footer>
  <p>© 2025 THE CODE KEEP &nbsp;⚔&nbsp; FORGED WITH <span>♥</span> AND MEAD</p>
  <p>MAY YOUR BUILDS NEVER FAIL<span class="blink">_</span></p>
</footer>
`
document.getElementById('mail-btn').addEventListener('click', () => {
  navigator.clipboard.writeText('tomassabella@hotmail.com')
  const btn = document.getElementById('mail-btn')
  btn.textContent = '✔ COPIADO!'
  setTimeout(() => { btn.textContent = '✉ MAIL' }, 2000)
})