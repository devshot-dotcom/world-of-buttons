const groupTitles = document.getElementsByClassName('group-title')

function showAnchorLink() {
    this.firstElementChild.style.display = 'inline-block'
}

function hideAnchorLink() {
    this.firstElementChild.style.display = 'none'
}

for(const groupTitle of groupTitles) {
    groupTitle.addEventListener('click', showAnchorLink)
    groupTitle.addEventListener('focus', showAnchorLink)
    groupTitle.addEventListener('mouseover', showAnchorLink)

    groupTitle.addEventListener('blur', hideAnchorLink)
    groupTitle.addEventListener('mouseout', hideAnchorLink)
}