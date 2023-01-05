document.addEventListener("DOMContentLoaded", () => {
	let callBackButton = document.getElementsByClassName("callback-button")[0]
	let modal = document.getElementsByClassName("modal")[0]
	let closeButton1 = modal.getElementsByClassName("modal__close-button")[0]
	let closeButton2 = modal.getElementsByClassName("modal__close")[0]
	let modalSuccess = modal.getElementsByClassName("modal__success")[0]
	let addButton = modal.getElementsByClassName("modal__add")[0]
	let usersTable = document.getElementsByClassName("users__elements")[0]

	let randomUser = document.getElementsByClassName("random-button")[0]

	callBackButton.onclick = function (e) {
		e.preventDefault()
		modal.classList.add("modal_active")
	}

	closeButton1.onclick = function (e) {
		e.preventDefault()
		modal.classList.remove("modal_active")
	}

	closeButton2.onclick = function (e) {
		e.preventDefault()
		modal.classList.remove("modal_active")
	}

	addButton.onclick = function () {
		let newUser = document.createElement("div")
		let modalInput = modal.getElementsByClassName("modal__input")[0].value

		newUser.setAttribute("class", "user")
		newUser.innerHTML = modalInput
		usersTable.appendChild(newUser)

		modalSuccess.classList.add("modal__success__active")
		setTimeout(function () {
			modalSuccess.classList.remove("modal__success__active")
		}, 1500)
	}

	modal.onmousedown = function (e) {
		let modalContent = modal.getElementsByClassName("modal__content")[0]
		if (e.target.closest("." + modalContent.className) === null) {
			this.classList.remove("modal_active")
		}
	}

	const tags = document.querySelectorAll(".user")

	randomUser.onclick = function () {
		randomSelect()
		document
			.getElementsByClassName("highlight")[0]
			.classList.remove("highlight")
	}

	function randomSelect() {
		const times = 30

		const interval = setInterval(() => {
			const randomTag = pickRandomTag()

			highlightTag(randomTag)

			setTimeout(() => {
				unHighlightTag(randomTag)
			}, 100)
		}, 100)

		setTimeout(() => {
			clearInterval(interval)

			setTimeout(() => {
				const randomTag = pickRandomTag()

				highlightTag(randomTag)
			}, 100)
		}, times * 100)
	}

	function pickRandomTag() {
		const tags = document.querySelectorAll(".user")
		return tags[Math.floor(Math.random() * tags.length)]
	}

	function highlightTag(tag) {
		tag.classList.add("highlight")
	}

	function unHighlightTag(tag) {
		tag.classList.remove("highlight")
	}
})
