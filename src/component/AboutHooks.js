function AboutHooks() {
  return (
    <>
      <div>
        <h1>useState</h1>
        <p>
          useState is a React Hook that lets you add a state variable to your
          component.
        </p>
        <p>const [state, setState] = useState(initialState);</p>
        <ul>
          <li>
            <b>This will return memoize value</b>
          </li>
          <li>
            The set function only updates the state variable for the next
            render. If you read the state variable after calling the set
            function, you will still get the old value that was on the screen
            before your call.
          </li>
          <li>
            If the new value you provide is identical to the current state, as
            determined by an Object.is comparison, React will skip re-rendering
            the component and its children. This is an optimization.
          </li>
          <li>
            React batches state updates. It updates the screen after all the
            event handlers have run and have called their set functions. This
            prevents multiple re-renders during a single event.
          </li>
          <li>
            <b>
              React keeps the state values “fixed” within one render’s event
              handlers.
              <p>
                each render’s state values are fixed, so the value of number
                inside the first render’s event handler is always 0, no matter
                how many times you call setNumber(1)
              </p>
            </b>
          </li>
          <li>
            <p>
              To summarize, here’s how you can think of what you’re passing to
              the setNumber state setter: An updater function (e.g. n ={"->"} n
              + 1) gets added to the queue. Any other value (e.g. number 5) adds
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
      <div>
        <h1>useMemo</h1>
        <p>
          useMemo is a React Hook that lets you cache the result of a
          calculation between re-renders.
          <h2>
            Allows you to memoize a computed value and recompute it only when
            its dependencies change. It was introduced in React version 16.3.0
            as part of the "Hooks" API. which was released in March 2018
          </h2>
        </p>
        <p>const cachedValue = useMemo(calculateValue, dependencies)</p>
        <ul>
          <li>useMemo:</li>
          <p>
            {" "}
            This hook is primarily used for memoizing the result of a complex
            computation and re-computing it only when the dependencies change.
            It is useful when you want to optimize the performance of
            calculations that result in a value. For example, you might use
            useMemo to calculate a derived value from props or state and ensure
            that it doesn't get recalculated on every render if its dependencies
            haven't changed.
          </p>
          <li>
            Here is an example :- const visibleTodos = useMemo(() ={">"}
            filterList(list), [list]);
          </li>
          <br />
          <li>
            <b>calculateValue</b> :- This function will calculate value and
            return that calculated value. It should be pure, should take no
            arguments, and should return a value of any type. React will call
            your function during the initial render. On next renders, React will
            return the same value again if the dependencies have not changed
            since the last render. Otherwise, it will call calculateValue,
            return its result, and store it so it can be reused later.,
          </li>
          <li>
            <b>dependencies :- </b>
            React will compare each dependency with its previous value using the
            Object.is comparison.If the dependency is same then value will pick
            from the cache
          </li>
          <br />
          <li>
            During next renders, it will either return an already stored value
            from the last render (if the dependencies haven’t changed), or call
            calculateValue again, and return the result that calculateValue has
            returned
          </li>
        </ul>
        <div>
          <h1>useCallback</h1>
          <p>
            useCallback is a React Hook that lets you cache a function
            definition between re-renders
          </p>
          <p>const cachedFn = useCallback(fn, dependencies)</p>
          <ul>
            <li>
              <b>This will return memoize function</b>
            </li>
            <li>
              fn: The function value that you want to cache. It can take any
              arguments and return any values. React will return (not call!)
              your function back to you during the initial render. On next
              renders, React will give you the same function again if the
              dependencies have not changed since the last render. Otherwise, it
              will give you the function that you have passed during the current
              render, and store it in case it can be reused later. React will
              not call your function. The function is returned to you so you can
              decide when and whether to call it.
            </li>
            <li>
              On the initial render, useCallback returns the fn function you
              have passed. During subsequent renders, it will either return an
              already stored fn function from the last render (if the
              dependencies haven’t changed), or return the fn function you have
              passed during this render.
            </li>
          </ul>
        </div>
        <div>
          <h1>Rect.memo</h1>
          React.memo is a higher-order component that memoizes a functional
          component. When you wrap a component in React.memo, it will only
          re-render when its props change. This can be beneficial for
          performance optimization when you have pure functional components that
          don't rely on any external state or context other than their props.
        </div>
        <ul>
          <li>
            In the context of useCallback, you use it to memoize a callback
            function in the parent component to prevent unnecessary re-creations
            of that function. If the child component relies on this callback and
            the parent component's state (or any other props) to render
          </li>
          <li>
            useCallback: This hook is used to memoize a callback function in the
            parent component. It ensures that the callback doesn't get recreated
            on every render of the parent component unless its dependencies
            change. This optimization helps prevent unnecessary re-renders of
            the parent component.
          </li>
          <li>
            So, in summary, using useCallback in the parent component is usually
            sufficient to optimize the callback function and prevent unnecessary
            re-creations. Using React.memo on the child component is only
            necessary when the child component itself is pure and doesn't rely
            on any other props or state that might change, and you want to
            optimize its re-rendering behavior further. In many cases, you might
            not need React.memo for the child component.
          </li>
          <h2>React.memo:</h2>
          <li>
            Higher-order component (HOC) for memoizing a functional component.
          </li>
          <li>
            Used to wrap functional components to prevent them from re-rendering
            unless their props change.
          </li>
          <li>
            It's used to optimize the rendering behavior of functional
            components, preventing unnecessary re-renders.
          </li>
          <li>It returns a new memoized component.</li>
          <li>
            React.memo is for memoizing entire functional components to prevent
            them from re-rendering unless their props change.
          </li>
        </ul>
        <div>
          <h1>useRef</h1>
          <p>
            useRef is a React Hook that lets you reference a value that’s not
            needed for rendering.
          </p>
          <h3>
            useRef is a React Hook that provides a way to create mutable
            references to DOM elements or to hold mutable values that persist
            across renders without causing re-renders when the value changes. It
            is typically used to interact with the DOM or store values that
            don't need to trigger re-renders.
          </h3>
          <p>const ref = useRef(initialValue)</p>
          <ul>
            <li>
              initialValue: The value you want the ref object’s current property
              to be initially. It can be a value of any type. This argument is
              ignored after the initial render.
            </li>
            <li>useRef returns an object with a single property:</li>
            <li>
              When you attach the ref object to a JSX element, React will
              automatically update the current property of the ref to reference
              the DOM element (or whatever you attached it to). In other words,
              after attaching the ref, you can access the DOM element using
              myRef.current.
            </li>
            <li>
              You can mutate the ref.current property. Unlike state, it is
              mutable
            </li>
            <li>
              When you change the ref.current property, React does not re-render
              your component. React is not aware of when you change it because a
              ref is a plain JavaScript object.
            </li>
            <li>
              Do not write or read ref.current during rendering, except for
              initialization. This makes your component’s behavior
              unpredictable.
            </li>
            <li>
              if we store the value of ref in state then it will re-render the
              component because of setState will update againa nd again
            </li>
            <ul>
              <li>
                If you try to pass a ref to your own component then You might
                get an error in the console.
              </li>
              <li>
                By default, your own components don’t expose refs to the DOM
                nodes inside them.
              </li>
              <li>
                to fix this you need to wrap your component in{" "}
                <b>forwardRef </b>
              </li>
              <li>
                <b>
                  In React, when you use the forwardRef function to create a
                  component that forwards a ref to an underlying DOM element or
                  component, you need to pass the ref as a second parameter to
                  the function component. This is a specific pattern required by
                  React to enable the forwarding of the ref correctly.
                </b>
              </li>
              <li>
                Access to the ref: By passing the ref as a second parameter to
                the function component, you gain direct access to the ref object
                that is passed from the parent component. This allows you to
                attach the ref to the desired DOM element or component within
                your custom component.
              </li>
            </ul>
          </ul>
        </div>
        <div>
          <h1>useContext</h1>
          <p>
            In React, "useContext" is a Hook that allows you to access the
            context of a parent component within a child component. Context
            provides a way to pass data through the component tree without
            having to pass props down manually at every level. It's often used
            when some data needs to be accessible to many components at
            different nesting levels in a React application.
          </p>
          <ul>
            <li>
              By using "useContext," you can avoid prop-drilling (passing data
              through multiple levels of components) and make your code cleaner
              and more maintainable, especially when dealing with global states,
              themes, or authentication information that needs to be available
              across various parts of your application.
            </li>
            <li>
              Keep in mind that "useContext" should be used for data that truly
              needs to be shared globally or across a significant portion of
              your component tree. For simpler cases of passing data to child
              components, using props is often sufficient.
            </li>
            <li>
              React automatically re-renders all the children that use a
              contextvalue which is passed as a props in through Provider . If
              the value if different then it will not re-render
            </li>
            <li>
              The previous and the next values are compared with the Object.is
              comparison. Skipping re-renders with memo{" "}
            </li>
            <li>
              <b>
                Note:- useContext() always looks for the closest provider above
                the component that calls it. It searches upwards and does not
                consider providers in the component from which you’re calling
                useContext()
              </b>
            </li>
            <ul>
              <li>
                <b>1. Create a Context:</b> First, you create a context using
                the createContext function. This context will hold the data you
                want to share.
              </li>
              <li>const MyContext = createContext()</li>
              <li>
                <b>2. Provide Context Data:</b> You wrap your component tree
                with a "MyContext.Provider"" component and pass in the data you
                want to share through the value prop.Please check provider
                example
              </li>
              <li>
                <b> 3. Consume Context Data:</b> In any child component within
                the tree, you can use the "useContext" Hook to access the data
                stored in the context.
              </li>
              <li> const contextData = useContext(MyContext);</li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutHooks;
