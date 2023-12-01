export default function BgTamThoi() {
  return (
    <div
      style={{
        width: "360px",
        height: "640px",
      }}
    >
      <video width="100%" height="100%" autoPlay loop muted>
        <source src="/video/bg/bg-work.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
