import {Alert, Button} from 'react-bootstrap';

export const Error = ({reload})=>(
    <Alert variant="danger">
        Oops!
        <Button onClick={reload}>Reload
        </Button>

    </Alert>
);