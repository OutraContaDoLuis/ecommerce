function showAuthAlert(elementId, message, type) {
    const alert = document.getElementById(elementId)
    alert.innerHTML = type == 'danger' ? [
        `<div class="alert alert-danger alert-dismissible position-fixed bottom-0 right-0 left-0" role="alert">`,
        `   <div>${message[0]}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('') : [
        `<div class="alert alert-success alert-dismissible position-fixed bottom-0 right-0 left-0" role="alert">`,
        `   <div>${message[0]} <a href="#" class="alert-link">${message[1]}</a> ${message[2]}.</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
}

export { showAuthAlert }
