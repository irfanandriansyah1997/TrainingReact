/**
 * Label Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.27
 */

/* eslint-disable */

import React, { Component } from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Label from '../label.component';

const defaultLabel = [
    {
        children: 'label',
        type: 'primary',
        rounded: false
    },
    {
        children: 'label',
        type: 'secondary',
        rounded: false
    },
    {
        children: 'label',
        type: 'tertiary',
        rounded: false
    },
    {
        children: 'label',
        type: 'success',
        rounded: false
    },
    {
        children: 'label',
        type: 'danger',
        rounded: false
    },
    {
        children: 'label',
        type: 'warning',
        rounded: false
    }
];

class LabelStorybook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: {
                default: defaultLabel
            },
            wording: `Label komponen digunakan untuk membuat label pada card atau suatu section`,
            template: (children, type, rounded) => '<Label' +
            '\n    type="' + type + '"' +
            '\n    rounded="' + rounded + '"' +
            '\n>' +
            '\n    ' + children + '\n' +
            '</Label> \n',
        };
    }

    getCode(key) {
        const { component, template } = this.state;
        return component[key].map(({
            children,
            type,
            rounded
        }) => template(
            children,
            type,
            rounded
        )).join('\n');
    }

    render() {
        const { component, wording } = this.state;

        return (
            <Template
                componentName="Label"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Label.</Text>
                <Coding code={this.getCode('default')}>
                    {component['default'].map((item) => (
                        <Label
                            type={item.type}
                            rounded={item.rounded}
                        >
                            {item.children}
                        </Label>
                    ))}
                </Coding>
            </Template>
        );
    }
}

export default LabelStorybook;
