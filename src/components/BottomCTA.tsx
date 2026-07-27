export default function BottomCTA() {
  return (
    <section style={{
      backgroundColor: 'var(--beige)',
      padding: '80px 20px 88px',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: 'clamp(20px, 3vw, 32px)',
        fontWeight: '400',
        letterSpacing: '0.08em',
        lineHeight: '1.6',
        color: 'var(--text)',
        marginBottom: '12px',
      }}>
        讓香氛療癒陪你遇見無限可能的自己
      </h2>
      <p style={{
        fontSize: '14px',
        color: 'var(--text-muted)',
        letterSpacing: '0.12em',
        marginBottom: '48px',
      }}>
        斜槓 ／ 創業 ／ 變現 ／ 陪跑
      </p>
      <a
        href="https://calendly.com/tingwenlin/1-1"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '14px 48px',
          backgroundColor: 'var(--gold)',
          color: 'var(--white)',
          fontSize: '15px',
          letterSpacing: '0.1em',
          borderRadius: '2px',
          transition: 'opacity 0.2s',
        }}
      >
        立即預約免費諮詢
      </a>
    </section>
  );
}
