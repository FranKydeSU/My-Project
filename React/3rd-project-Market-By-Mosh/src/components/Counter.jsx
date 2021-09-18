import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmounted')
    }
    render() {
        console.log('Counter - Rendered')

        return (
            <>
                <div>
                    <h4>Number #{this.props.counter.id}</h4>
                    <span
                        className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-sm m-2">
                        Increment
                    </button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </div>
            </>
        )
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };

    getBadgeClasses() {
        let classes = "badge m-2 rounded-pill bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}