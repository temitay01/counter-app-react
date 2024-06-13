import Button from "./Button";

function AppButton({increase,decrease,reset}){
    return(<div>
        <Button handleClick={increase}>Increment</Button>
        <Button handleClick={decrease}>Decrement</Button>
        <Button handleClick={reset}>Reset</Button>
      </div>)
}

export default AppButton