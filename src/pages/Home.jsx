import "./Home.css";
import bgImg from "../assets/invite-bg.jpeg";
import QR from "../components/QR.jsx";
import Particles from "../components/Particles.jsx";

export default function Home() {
  // TODO: replace with your real Maps/Location URL
  const LOCATION_URL = "https://maps.google.com/?q=Roche%20D'oree";

  return (
    <section
      className="invite"
      style={{ "--bg": `url(${bgImg})` }}
    >
      {/* Glow balls */}
      <Particles count={48} />

      <div className="content">
        <h1 className="save-date">
          <span className="save">Save</span>
          <span className="the">The</span>
          <span className="date">Date</span>
        </h1>

        <p className="small-cap">THE WEDDING OF</p>

        <h2 className="names">Samira &amp; Khodor</h2>

        <div className="rule"></div>

        <p className="datetime">19 August 2025 – 8:00 pm</p>

        <p className="venue">Roche D’oree</p>

        <div className="qr-wrap">
          <QR value={'https://maps.app.goo.gl/rGsdgezE68m8psF36'} size={180} />
        </div>

        {/* keep as-is; you’ll swap with server data later */}
      </div>
    </section>
  );
}
