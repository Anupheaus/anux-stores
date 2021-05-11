import { createId } from './idUtils';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface StoreRecord {
  id: string;
  [key: string]: any;
}

interface Actions { [key: string]: (...args: any[]) => any }

interface StoreDefinition<RecordType extends StoreRecord> {
  actions: {
    [key: string]: (...args: any[]) => any;
  };
}

interface Store<RecordType extends StoreRecord, DefinitionType extends StoreDefinition<RecordType>> {

}

interface ListStoreCreation<RecordType extends StoreRecord> {
  define<DefinitionType extends StoreDefinition<RecordType>>(definition: DefinitionType): Store<RecordType, DefinitionType>;
}

export const AnuxStore = {
  createListStore<T extends StoreRecord>(): ListStoreCreation<T> {
    return null as any;
  },
};

interface User extends StoreRecord {
  forename: string;
  surname: string;
}

const UserStore = AnuxStore.createListStore<User>()
  .define({

    actions: {

      load(): void {        
        
        return;
      },
    },
  });

type UseStore<StoreType extends Store<any, any>> = StoreType extends Store<infer RecordType, infer DefinitionType> ? { records: RecordType[] } & DefinitionType['actions'] : never;

function useStore<StoreType extends Store<any, any>>(storeType: StoreType): UseStore<StoreType> {
  return null as any;
}

const { records, load } = useStore(UserStore);
