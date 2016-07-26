# StupidSubscribe
Tiny JS snippet for an extremely simple, extremely stupid data subscriber.


###API
API consists of 2 stupid functions `subscribe` and `action`;

`action: (fn) => (fn)` wraps a function and introduces the sole side effect of triggering all subscribed actions.

`subscribe: (listenerFn, readFn)` subscribes `listenerFn` to all actions. 

Whenever a function wrapped with `action` is called, all subscribed listeners are called with the results of their read function, i.e. `listenerFn(readFn())` is called

### Brief pseudocoded example:

This implements an `<h1>` that increments a counter when you click on it.

```
// index.jsx
import {subscribe} from 'stupidsubscribe';
import appInterface from './app.js';
import AppView from './appview.jsx';

subscribe(
  (appProps) => {
    render(<AppView {...appProps} />);
  },
  app.getProps
);

```

```
// app.js
import {action} from 'stupidsubscribe';

let numTimes = 0;

export default {
  getProps: () => ({
    text: `Clicked ${numTimes} times`,
    clickHeader: action(() => (numTimes++)),
  }),
};
```

```
// index.jsx
const AppView = (props) => (
  <article>
    <h1 onClick={props.clickHeader}>Click Here!</h1>
    {props.text}!
  </article>
);

export default AppView;
```

###Motivation
something something `left-pad`

### Contributing
There's almost certainly no reason to contribute

### FAQ
> Does the API even deserve to be called an API? It's not really an interface, as much as it is ~6 lines of utility functions

*— [@evinism](https://github.com/evinism)*

No, probably not, but I went to a hackathon once and the speaker said "API" a lot and I guess it stuck with me.


> Can't we modify it so that actions trigger certain subscriptions, rather than all subscriptions, always?

*— [@evinism](https://github.com/evinism)*

I don't want to rename the repo to SlightlyLessStupidSubscribe.


> Could I use this on something that's not stupid?

*— [@evinism](https://github.com/evinism)*

Yes, I absolutely encourage it. I am a big proponent of the quintessential design principle "Software should be a trainwreck".

