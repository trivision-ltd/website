export interface IMessage {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface IEnvelope {
    service_id: string;
    template_id: string;
    user_id: string;
    template_params: IMessage;
}

export type FormStatus = 'idle' | 'success' | 'error';
export type LatLng = [number, number];

export interface IBusinessAddress {
    place: string;
    position: LatLng;
}

const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_ENDPOINT = import.meta.env.VITE_EMAILJS_ENDPOINT ?? 'https://api.emailjs.com/api/v1.0/email/send';

export const sendEmail = async (message: IMessage) => {
    const envelope: IEnvelope = {
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: USER_ID,
        template_params: message,
    };

    return fetch(EMAILJS_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(envelope),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};