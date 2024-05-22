import "./CameraPage.scss";

export default function CameraPage() {
  return (
    <main>
      <section className="camera">
        <h1>Camera</h1>
        <button id="accessButton">
          <img src="camera-icon.png" alt="Access Camera and Photo Album" />
        </button>
        <input type="file" id="fileInput" accept="image/*" capture="camera" />
      </section>
    </main>
  );
}
