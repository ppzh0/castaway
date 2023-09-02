# for the mobile
```css
.transition-wrapper {
    position: relative;
    height: 30px;
    width: 50px;
}

.element1 {
    transition: 1s;
    font-size: 20px;
    height: 1px;
    width: 80%;
    background-color: #333333;
    position: absolute;
    top: 0;
    left: 50%;
    transform-origin: 0% 50%;
    transform: translateX(-20px);
}

.transition-wrapper:hover .element1 {
    transform: translateX(-20px) rotate(45deg);
}

.element2 {
    transition: 1s;
    font-size: 20px;
    height: 1px;
    width: 80%;
    background-color: #333333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-20px);
}

.transition-wrapper:hover .element2 {
    opacity: 0;
}

.element3 {
    transition: 1s;
    font-size: 20px;
    height: 1px;
    width: 80%;
    background-color: #333333;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform-origin: 0% 50%;
    transform: translateX(-20px);
}

.transition-wrapper:hover .element3 {
    transform: translateX(-20px) rotate(-45deg);
}
```