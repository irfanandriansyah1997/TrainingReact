/**
 * Text Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.25
 */

import React, { Component } from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import TextComponent from '../text.component';

class ButtonStorybook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: [
                {
                    type: 'h1',
                    text: 'Text H1',
                    as: 'h1'
                },
                {
                    type: 'h2',
                    text: 'Text H2',
                    as: 'h2'
                },
                {
                    type: 'h3',
                    text: 'Text H3',
                    as: 'h3'
                },
                {
                    type: 'h4',
                    text: 'Text H4',
                    as: 'h4'
                },
                {
                    type: 'h5',
                    text: 'Text H5',
                    as: 'h5'
                },
                {
                    type: 'h6',
                    text: 'Text H6',
                    as: 'h6'
                },
                {
                    type: 'normal',
                    text: 'Text Normal',
                    as: 'p'
                },
                {
                    type: 'featured',
                    text: 'Text Featured',
                    as: 'h3'
                },
                {
                    type: 'meta',
                    text: 'Text Meta',
                    as: 'span'
                },
                {
                    type: 'caption',
                    text: 'Text Caption',
                    as: 'span'
                }
            ],
            wording: `Text komponen digunakan untuk pengganti tag P, Span, H1, H2,
                H3, H4, H5, H6.`,
            template: (type, text, as) => `<Text as="${as}" type="${type}">\n    ${text}\n</Text>\n`
        };
    }

    getCode() {
        const { component, template } = this.state;
        return component.map(({ type, text, as }) => template(type, text, as)).join('\n');
    }

    render() {
        const { wording, component } = this.state;

        return (
            <Template
                componentName="Text"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Text.</Text>
                <Coding code={this.getCode()}>
                    {component.map((item) => (
                        <TextComponent {...item}>
                            {item.text}
                        </TextComponent>
                    ))}
                </Coding>
            </Template>
        );
    }
}

export default ButtonStorybook;
