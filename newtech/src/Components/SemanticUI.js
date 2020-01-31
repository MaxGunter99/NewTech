import React from 'react';
import { 
    Button, 
    Icon, 
    Label, 
    Image, 
    Reveal, 
    Segment, 
    Dimmer, 
    Loader
} from 'semantic-ui-react';

export default function SemanticUI() {

    return (

        <div>

            {/* LOADING BUTTONS */}
            <div>
                <Button loading>Loading</Button>
                <Button basic loading>
                    Loading
                </Button>
                <Button loading primary>
                    Loading
                </Button>
                <Button loading secondary>
                    Loading
                </Button>
            </div>

            {/* LIKE AND FORK */}
            <div>
                <Button as='div' labelPosition='right'>
                    <Button color='red'>
                        <Icon name='heart' />
                        Like
                    </Button>
                    <Label as='a' basic color='red' pointing='left'>
                            2,048
                    </Label>
                </Button>

                <Button as='div' labelPosition='right'>

                    <Button basic color='blue'>
                        <Icon name='fork' />
                        Fork
                    </Button>

                    <Label as='a' basic color='blue' pointing='left'>
                        2,048
                    </Label>

                </Button>
            </div>

            {/* REVEALS */}
            <Reveal animated='move right'>
                <Reveal.Content visible>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' size='small' />
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
                </Reveal.Content>
            </Reveal>

            {/* SPINNERS */}
            <Icon loading name='spinner' />

            {/* ICONS */}
            <div>
                <Icon circular name='users' />
                <Icon circular color='teal' name='users' />
                <Icon circular inverted name='users' />
                <Icon circular inverted color='teal' name='users' />
            </div>


            {/* LOADER */}
            <div>
                <Segment>
                    <Dimmer active>
                        <Loader inverted>Loading</Loader>
                    </Dimmer>
                </Segment>
            </div>

        </div>

    )

}