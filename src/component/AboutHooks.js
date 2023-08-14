function AboutHooks() {
  return (
    <div>
      <h1>useState</h1>
      <p>
        useState is a React Hook that lets you add a state variable to your
        component.
      </p>
      <p>const [state, setState] = useState(initialState);</p>
      <ul>
        <li>
          The set function only updates the state variable for the next render.
          If you read the state variable after calling the set function, you
          will still get the old value that was on the screen before your call.
        </li>
        <li>
          If the new value you provide is identical to the current state, as
          determined by an Object.is comparison, React will skip re-rendering
          the component and its children. This is an optimization.
        </li>
        <li>
          React batches state updates. It updates the screen after all the event
          handlers have run and have called their set functions. This prevents
          multiple re-renders during a single event.
        </li>
        <li>
          <b>
            React keeps the state values “fixed” within one render’s event
            handlers.
            <p>
              each render’s state values are fixed, so the value of number
              inside the first render’s event handler is always 0, no matter how
              many times you call setNumber(1)
            </p>
          </b>
        </li>
        <li>
          <p>
            To summarize, here’s how you can think of what you’re passing to the
            setNumber state setter: An updater function (e.g. n ={"->"} n + 1)
            gets added to the queue. Any other value (e.g. number 5) adds
            “replace with 5” to the queue, ignoring what’s already queued.
          </p>
        </li>
        <li>
          <h4>Recape</h4>
          <p>
            Setting state does not change the variable in the existing render,
            but it requests a new render. React processes state updates after
            event handlers have finished running. This is called batching. To
            update some state multiple times in one event, you can use
            setNumber(n {"->"} n + 1) updater function.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default AboutHooks;
