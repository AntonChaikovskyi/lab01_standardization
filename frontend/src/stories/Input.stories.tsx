import Input from "@/components/common/input.tsx";

const meta = {
    title: 'Common/Input',
    component: Input,
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        icon: { control: 'text' },
        value: { control: 'text' },
        onChange: { action: 'changed' },
    },
};

export default meta;

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Name',
    placeholder: 'Enter your name',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: 'Search',
    placeholder: 'Search...',
    icon: <span>🔍</span>,
};

export const Filled = Template.bind({});
Filled.args = {
    label: 'Email',
    value: 'test@example.com',
};
