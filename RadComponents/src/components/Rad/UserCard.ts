const template = document.createElement("template");
template.innerHTML = `
  <style>
  .user-card {
		font-family: 'Arial', sans-serif;
		background: #f4f4f4;
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		margin-bottom: 15px;
		border-bottom: darkorchid 5px solid;
	}

	.user-card img {
		width: 100%;
	}

	.user-card button {
		cursor: pointer;
		background: darkorchid;
		color: #fff;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
	}
  </style>
  <div class="user-card">
    <img />
    <div>
      <h3></h3>
      <div class="info">
        <p><slot name="email" /></p>
        <p><slot name="phone" /></p>
      </div>
      <button id="toggle-info">Hide Info</button>
    </div>
  </div>
`;

class UserCard extends HTMLElement {
  static get observedAttributes() {
    return ["name", "avatar"];
  }

  showInfo: boolean;

  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: "open" });
    (this.shadowRoot as ShadowRoot).appendChild(
      template.content.cloneNode(true)
    );

    this.name = this.getAttribute("name") || "";
    this.avatar = this.getAttribute("avatar") || "";
  }

  get name() {
    return this.getAttribute("name") || "";
  }

  set name(value: string) {
    if (this.getAttribute("name") !== value) {
      this.setAttribute("name", value);
    }
    if (this.shadowRoot) {
      const h3 = this.shadowRoot.querySelector(
        "h3"
      ) as HTMLHeadingElement | null;
      if (h3) h3.innerText = value;
    }
  }

  get avatar() {
    return this.getAttribute("avatar") || "";
  }

  set avatar(value: string) {
    if (this.getAttribute("avatar") !== value) {
      this.setAttribute("avatar", value);
    }
    if (this.shadowRoot) {
      const img = this.shadowRoot.querySelector(
        "img"
      ) as HTMLImageElement | null;
      if (img) img.src = value;
    }
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    const info = this.shadowRoot?.querySelector(
      ".info"
    ) as HTMLDivElement | null;
    const toggleBtn = this.shadowRoot?.querySelector(
      "#toggle-info"
    ) as HTMLButtonElement | null;
    if (info && toggleBtn) {
      if (this.showInfo) {
        info.style.display = "block";
        toggleBtn.innerText = "Hide Info";
      } else {
        info.style.display = "none";
        toggleBtn.innerText = "Show Info";
      }
    }
  }

  connectedCallback() {
    const btn = this.shadowRoot?.querySelector(
      "#toggle-info"
    ) as HTMLButtonElement | null;
    if (btn) {
      btn.addEventListener("click", () => this.toggleInfo());
    }
  }

  disconnectedCallback() {
    const btn = this.shadowRoot?.querySelector(
      "#toggle-info"
    ) as HTMLButtonElement | null;
    if (btn) {
      btn.removeEventListener("click", () => this.toggleInfo());
    }
  }
}

export default UserCard;
