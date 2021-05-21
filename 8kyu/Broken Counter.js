// Our counter prototype is broken. Can you spot, what's wrong here?
function Counter() {
  value = 0;
}

Counter.prototype.increase = () => this.value++

Counter.prototype.getValue = () => this.value

Counter.prototype.reset = () => this.value = 0
