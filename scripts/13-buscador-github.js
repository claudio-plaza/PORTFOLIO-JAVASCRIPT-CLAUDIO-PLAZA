// Buscador GitHub (usa los IDs presentes en Index.html)

(function () {
  const btn = document.getElementById('buscar-github');
  const input = document.getElementById('usuario');
  const resultado = document.getElementById('resultado-github');
  const output13 = document.getElementById('output13');

  if (!btn || !input) return; // elementos no presentes

  btn.addEventListener('click', async () => {
    const user = input.value.trim();
    if (!user) {
      alert('Ingresa un nombre de usuario de GitHub');
      return;
    }

    if (resultado) {
      resultado.style.display = '';
      const loginEl = document.getElementById('github-login');
      if (loginEl) loginEl.textContent = 'Buscando...';
    }
    if (output13) {
      output13.classList.remove('visible');
      output13.innerHTML = '';
    }

    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}`);
      if (!res.ok) {
        const msg = res.status === 404 ? '❌ Usuario no encontrado' : `❌ Error: ${res.status}`;
        const loginEl = document.getElementById('github-login');
        if (loginEl) loginEl.textContent = msg;
        if (resultado) resultado.style.display = '';
        if (output13) {
          output13.innerHTML = msg;
          output13.classList.add('visible');
        }
        return;
      }

      const data = await res.json();

      // Rellenar elementos existentes en el HTML para evitar duplicados
      const avatar = document.getElementById('github-avatar');
      const login = document.getElementById('github-login');
      const followers = document.getElementById('github-followers');
      const repos = document.getElementById('github-repos');
      const locationEl = document.getElementById('github-location');
      const emailEl = document.getElementById('github-email');
      const linkEl = document.getElementById('github-link');

      if (avatar) avatar.src = data.avatar_url || '';
      if (login) login.textContent = data.login || '';
      if (followers) followers.textContent = `👥 Seguidores: ${data.followers}`;
      if (repos) repos.textContent = `📦 Repos públicos: ${data.public_repos}`;
      if (locationEl) locationEl.textContent = data.location ? `📍 ${data.location}` : '';
      if (emailEl) emailEl.textContent = data.email ? `✉️ ${data.email}` : '';
      if (linkEl) {
        linkEl.href = data.html_url || '#';
        linkEl.style.display = data.html_url ? '' : 'none';
      }

      // Obtener últimos repos del usuario (los 5 más recientes por actualización)
      try {
        const reposRes = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=5`);
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          const repoList = document.getElementById('github-repo-list');
          if (repoList) {
            repoList.innerHTML = '';
            reposData.forEach(r => {
              const li = document.createElement('li');
              li.style.cssText = 'background:#fff;margin:6px 0;padding:8px;border-radius:6px;box-shadow:0 1px 3px rgba(0,0,0,0.06);';
              const a = document.createElement('a');
              a.href = r.html_url;
              a.target = '_blank';
              a.rel = 'noreferrer';
              a.textContent = r.name;
              a.style.cssText = 'font-weight:600;color:#2c3e50;text-decoration:none;';
              const span = document.createElement('div');
              span.style.cssText = 'font-size:0.9em;color:#666;margin-top:4px;';
              const updated = new Date(r.updated_at).toLocaleString();
              span.textContent = `${r.stargazers_count ? '⭐ ' + r.stargazers_count + ' · ' : ''}Última actualización: ${updated}`;
              li.appendChild(a);
              li.appendChild(span);
              repoList.appendChild(li);
            });
          }
        }
      } catch (e) {
        console.warn('No se pudieron cargar repos:', e);
      }

      if (resultado) resultado.style.display = '';
      if (output13) {
        output13.innerHTML = '';
        output13.classList.remove('visible');
      }
    } catch (err) {
      const msg = '⚠️ Error al conectar con GitHub';
      const loginEl = document.getElementById('github-login');
      if (loginEl) loginEl.textContent = msg;
      if (resultado) resultado.style.display = '';
      if (output13) {
        output13.innerHTML = msg;
        output13.classList.add('visible');
      }
    }
  });
})();
