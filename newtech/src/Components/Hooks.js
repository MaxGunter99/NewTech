import React, { useState } from 'react'
import { Input } from 'semantic-ui-react'

export default function HooksInput( props ) {

    const [ firstName , setFirstName ] = useState( 'Max' )
    const [ lastName , setLastName ] = useState( 'Gun' )

    function handleSetFirstName( e ) {
        setFirstName( e.target.value )
    }

    function handleSetLastName( e ) {
        setLastName( e.target.value )
    }

    return (
        <div>

            <h2>Hooks 'name' state:</h2>
            <h2>{ firstName } { lastName }</h2>

            <form>

                <row>

                    <label>First Name:</label>

                    <Input 
                        value = { firstName } 
                        onChange = { handleSetFirstName }
                    />

                </row>

                <row>
                    <label>Last Name:</label>
                    
                    <Input 
                        value = { lastName } 
                        onChange = { handleSetLastName }
                    />
                </row>

            </form>

        </div>

    )

}