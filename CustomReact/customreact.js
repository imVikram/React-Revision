function customerRender(reactElement, Container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href', reactElement.props.href) 
    domElement.setAttribute('target', reactElement.props.href) 

    Container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank"
        
    },
    children: 'click me to go to google'
}

const mainContainer = document.querySelector('#root')
customerRender(reactElement,mainContainer)