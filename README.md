<h1>Component LifeCycle</h1>
<h3>In React, components have a lifecycle that consists of different phases. Each phase has a set of lifecycle methods that are called at specific points in the component's lifecycle. These methods allow you to control the component's behavior and perform specific actions at different stages of its lifecycle.</h3>
<h4>--> There Are 3 Type Of Component LifeCycle</h4>
<li>ComponentDidMount</li>
<li>ComponentDidUpdate</li>
<li>ComonentWillUnMount</li>
<br>
<h1>1. ComponentDidMount</h1>
<ul>
  <li>In the React constituent lifecycle, the componentDidMount() method is a crucial parting of the mounting phase. It is a lifecycle method called automatically by React after the component has been rendered for the first clip and inserted into the DOM.</li>
  <li>Syntex : componentDidMount() </li>
  <li>If you define the componentDidMount method, React will call it when your component is added (mounted) to the screen. This is a common place to start data fetching, set up subscriptions, or manipulate the DOM nodes</li>
  <li>If you implement componentDidMount, you usually need to implement other lifecycle methods to avoid bugs. For example, if componentDidMount reads some state or props, you also have to implement componentDidUpdate to handle their changes, and componentWillUnmount to clean up whatever componentDidMount was doing.</li>
</ul>
<br>
<h1>2. ComponentDidUpdate</h1>
<ul>
  <li>ComponentDidUpdate is part of the React component lifecycle. We use it to respond to external changes to a component's details or changes to its internal state. With componentDidUpdate, you can modify the central DOM node, request remote data, and update the internal state of your components.</li>
  <li>Syntex : ComponentDidUpdate(prevProps, prevState, snapshot) </li>
  <h3>What is componentDidUpdate?</h3>
  <li>ComponentDidUpdate is a React component lifecycle method invoked immediately after a component's updates are flushed to the DOM. This is one of the most used built-in methods, which is not called for the initial render nor applicable to your functional details.</li>
</ul>
<br>
<h1>3. ComponentWillUnMount</h1>
<ul>
  <li>componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()</li>
</ul>
