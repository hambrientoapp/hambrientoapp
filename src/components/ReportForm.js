import React from "react";
import { Form, Button } from "react-bootstrap";

const checkboxes = [
    {
        name: "Burger",
        value: "burger"
    },
    {
        name: "Pizza",
        value: "pizza"
    },
    {
        name: "Sushi",
        value: "sushi"
    },
    {
        name: "Mexican",
        value: "mexican"
    },
    {
        name: "Venezuelan",
        value: "venezuelan"
    },
];

const ReportForm = () => {
    return (
        <Form>
            <Form.Group controlId="formRegisterPlaceName">
                <Form.Label>Name of the place</Form.Label>
                <Form.Control type="text" name="namePlace" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                {checkboxes.map(({ name, value }) => (
                    <Form.Check
                        key={`custom-${value}`}
                        custom
                        type="checkbox"
                        id={`custom-${value}`}
                        label={name}
                        name={name}
                        value={value}
                    />
                ))}
            </Form.Group>

            <Form.Group controlId="formRegisterPlaceName">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" />
            </Form.Group>

            <Form.Group controlId="formRegisterPlaceName">
                <Form.Label>Coordinates</Form.Label>
                <Form.Control
                    type="text"
                    name="latitude"
                    placeholder="Latitude"
                />
                <Form.Control
                    type="text"
                    name="longitude"
                    placeholder="Longitude"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ReportForm;
