import Button from "@/components/common/button.tsx";

const meta = {
    title: 'Common/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        className: { control: 'text' },
        onClick: { action: 'clicked' },
        additionalItem: { control: 'text' }
    },
};

export default meta;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Click me',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    children: 'Download',
    additionalItem: <span>⬇️</span>,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
    children: 'Styled',
    className: 'bg-red-500',
};
