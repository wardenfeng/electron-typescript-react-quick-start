
import React from 'react';

export default class HelloWorld extends React.Component<{}, {}> {

    public render() {
        return (
            <div className="hello-world">
                Hello, world!
                    <canvas id="glcanvas" width="640" height="480">
                    Your browser doesn't appear to support the HTML5 <code>&lt;canvas&gt;</code> element.
                    </canvas>
            </div >
        );
    }
}
