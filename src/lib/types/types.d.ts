
export interface Todo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	createdAt: Date;
	bgColor: string;
	icon: string;
}

export type IconName = 'HomeIcon' | 'ListIcon' | 'AddIcon' | 'CheckIcon' | 'MenuIcon' | 'CloseIcon' | 'CheckSquareIcon' | 'TrashIcon';
