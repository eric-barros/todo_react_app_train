import { render, screen } from '@testing-library/react';
import {
	Text,
	Group,
	Card,
	ActionIcon,
	//Code,
} from '@mantine/core';
import { Trash } from 'tabler-icons-react';

test('renders todo item with correct text', () => {
    const task = { title: "Gardening", summary: "With my daughter" };
    render(
        <Card withBorder key={index} mt={'sm'}>
            <Group position={'apart'}>
                <Text weight={'bold'}>{task.title}</Text>
                <ActionIcon
                    onClick={() => {
                        deleteTask(index);
                    }}
                    color={'red'}
                    variant={'transparent'}>
                    <Trash />
                </ActionIcon>
            </Group>
            <Text color={'dimmed'} size={'md'} mt={'sm'}>
                {task.summary
                    ? task.summary
                    : 'No summary was provided for this task'}
            </Text>
        </Card>
    );
    expect(screen.getByText(/Gardening/i)).toBeInTheDocument();
});