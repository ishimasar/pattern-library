export function typingText() {
  document.querySelectorAll('.typewriter-cycle').forEach(cycle => {
    const items = cycle.querySelectorAll('typewritten-text')
    for (let i = 0; i < items.length; ++i) {
      const cur = items[i]
      const next = items[i === items.length - 1 ? 0 : i + 1]

      cur.addEventListener('typewritten-text:phrasetyped', () => setTimeout(cur.start, cur.phraseInterval))
      cur.addEventListener('typewritten-text:phraseremoved', () => {
        cur.classList.remove('active')
        next.classList.add('active')
        setTimeout(next.start, next.phraseInterval)
      })
    }
  })
}