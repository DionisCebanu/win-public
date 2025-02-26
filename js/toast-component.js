class ToastNotification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                .toast {
                    visibility: hidden;
                    min-width: 250px;
                    min-height: 45px;
                    padding: 0;
                    background-color: #fff;
                    color: #000;
                    border-bottom-left-radius: 5px;
                    position: fixed;
                    z-index: 9999;
                    top: 88px;
                    right: -20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    opacity: 0;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .toast.show {
                    visibility: visible;
                    animation: fadein 0.5s forwards;
                }

                .toast.hide {
                    animation: fadeout 0.5s forwards;
                }

                @keyframes fadein {
                    from {opacity: 0; right: -20px;}
                    to {opacity: 1; right: 0px;}
                }

                @keyframes fadeout {
                    from {opacity: 1; right: 0px;}
                    to {opacity: 0; right: -20px;}
                }

                .toast.success {
                    border-top: solid #3EB717 2px;
                }

                .toast.error {
                    border-top: solid #EF4444 2px;
                }

                .toast.warning {
                    border-top: solid #FBBF24 2px;
                }

                .toast.info {
                    border-top: solid #1E4FFE 2px;
                }

                #message {
                  font-size: 17px;
                }

                .icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left:15px;
                    margin-right:7px;
                    max-width: 25px;
                    max-height: 25px;
                }

                .close-btn {
                    background-color: #fff;
                    min-height: 46px;
                    min-width: 46px;
                    padding: 0 25px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    }
                .hide .close-btn {
                        display: none;
                }

                .close-btn.success {
                    background-color: #3EB717;
                    border: solid #3EB717 2px;
                }

                .close-btn.error {
                    background-color: #EF4444;
                    border: solid #EF4444 2px;
                }

                .close-btn.warning {
                    background-color: #FBBF24;
                    border: solid #FBBF24 2px;
                }

                .close-btn.info {
                    background-color: #1E4FFE;
                    border: solid #1E4FFE 2px;
                }

                .close-btn img {
                    max-width: 23px;
                    max-height: 23px;
                }
            </style>

            <div class="toast" id="toast">
                <span id="icon"></span>
                <span id="message">This is a toast notification</span>
                <button class="close-btn" id="close-btn">
                    <img src="/assets/icons/fermer.svg" alt="close"/>
                </button>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector("#close-btn")
            .addEventListener("click", () => this.hideToast());
    }

    disconnectedCallback() {
        this.shadowRoot
            .querySelector("#close-btn")
            .removeEventListener("click", () => this.hideToast());
    }

    showToast(message, type) {
        const toast = this.shadowRoot.getElementById("toast");
        const closeBtn = this.shadowRoot.getElementById("close-btn");
        const messageSpan = this.shadowRoot.getElementById("message");
        const iconSpan = this.shadowRoot.getElementById("icon");

        const icons = {
            success: '/assets/icons/success.svg',
            error: '/assets/icons/erreur.svg',
            warning: '/assets/icons/avertissement.svg',
            info: '/assets/icons/information.svg'
        };

        iconSpan.innerHTML = `<img src="${icons[type]}" alt="${type}" class="icon"/>`;
        messageSpan.innerHTML = message;
        toast.className = `toast show ${type}`;
        closeBtn.className = `close-btn ${type}`;

        setTimeout(() => {
            toast.classList.add("hide");
        }, 3500); // 3.5s Show duration (total display time minus fadeout duration)
    }

    hideToast() {
        const toast = this.shadowRoot.getElementById("toast");
        toast.classList.add("hide");
    }
}

customElements.define("toast-notification", ToastNotification);
