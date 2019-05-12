import React, { Component } from 'react';
import DefaultTemplate from '@/components/templates/default-template/default-template.component';
import Button from '@/components/atoms/button/button.component';

class FrontPage extends Component {
    render() {
        return (
            <DefaultTemplate>
                <Button>Default</Button>
                <Button size="small">Small</Button>
                <Button type="secondary">Default</Button>
                <Button type="secondary" size="small">
                    Small
                </Button>
                <Button type="tertiary">Default</Button>
                <Button type="tertiary" size="small">
                    Small
                </Button>
                <hr />

                <Button disable outline>
                    Default
                </Button>
                <Button disable outline size="small">
                    Small
                </Button>
                <Button disable outline type="secondary">
                    Default
                </Button>
                <Button disable outline type="secondary" size="small">
                    Small
                </Button>
                <Button disable outline type="tertiary">
                    Default
                </Button>
                <Button disable outline type="tertiary" size="small">
                    Small
                </Button>
                <hr />

                <Button shadow>Default</Button>
                <Button shadow size="small">
                    Small
                </Button>
                <Button shadow type="secondary">
                    Default
                </Button>
                <Button shadow type="secondary" size="small">
                    Small
                </Button>
                <Button shadow type="tertiary">
                    Default
                </Button>
                <Button shadow type="tertiary" size="small">
                    Small
                </Button>
                <hr />

                <Button outline>Default</Button>
                <Button outline size="small">
                    Small
                </Button>
                <Button outline type="secondary">
                    Default
                </Button>
                <Button outline type="secondary" size="small">
                    Small
                </Button>
                <Button outline type="tertiary">
                    Default
                </Button>
                <Button outline type="tertiary" size="small">
                    Small
                </Button>
                <hr />
                <Button outline shadow>
                    Default
                </Button>
                <Button outline shadow size="small">
                    Small
                </Button>
                <Button outline shadow type="secondary">
                    Default
                </Button>
                <Button outline shadow type="secondary" size="small">
                    Small
                </Button>
                <Button outline shadow type="tertiary">
                    Default
                </Button>
                <Button outline shadow type="tertiary" size="small">
                    Small
                </Button>
            </DefaultTemplate>
        );
    }
}

export default FrontPage;
