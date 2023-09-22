import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {   
            id: "1",
            label: 'Is this recomended',
            content: 'Yes, this is totally recomeded even ecourage. Yes, this is totally recomeded even ecourage. Yes, this is totally recomeded even ecourage.'
        },
        {
            id: "2",
            label: 'Is this not recomended',
            content: 'No, this is only for an admin. No, this is only for an admin. No, this is only for an admin.'
        },
        {
            id: "3",
            label: 'Is this bad advice',
            content: 'No, this is the sate of the law from 1988. No, this is the sate of the law from 1988. No, this is the sate of the law from 1988.'
        }
    ];

    return(
        <Accordion items={items} />
    );
};

export default AccordionPage;
