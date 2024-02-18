import React, { useEffect } from 'react';
import mqtt from 'mqtt';

const MQTTComponent = () => {
    useEffect(() => {
        const client = mqtt.connect('ws://localhost'); // WebSocket address of Express server

        client.on('connect', function () {
            console.log('Connected to MQTT broker');
            client.subscribe('topic'); // Subscribe to relevant MQTT topics
        });

        client.on('message', function (topic, message) {
            console.log('Received message:', message.toString());
            // Process the message as needed
        });

        return () => {
            client.end();
        };
    }, []);

    return <div>MQTT Component</div>;
};

export default MQTTComponent;
