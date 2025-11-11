function updateWATTime() {
  const el = document.getElementById('current-time');
  if (!el) return;

  const now = new Date();
  const watOffsetMs = 60 * 60 * 1000;
  const watTime = new Date(now.getTime() + watOffsetMs);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Africa/Lagos'
  };

  const formatter = new Intl.DateTimeFormat('en-GB', options);
  const parts = formatter.formatToParts(watTime);

  const dateStr = `${parts.find(p=>p.type==='weekday').value}, ` +
                  `${parts.find(p=>p.type==='day').value} ` +
                  `${parts.find(p=>p.type==='month').value} ` +
                  `${parts.find(p=>p.type==='year').value}`;

  const timeStr = `${parts.find(p=>p.type==='hour').value}:${parts.find(p=>p.type==='minute').value} ` +
                  `${parts.find(p=>p.type==='dayPeriod').value} WAT`;

  el.textContent = `${dateStr} – ${timeStr}`;
}

updateWATTime();
setInterval(updateWATTime, 1000);