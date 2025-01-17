import { adminTenantId, defaultTenantId } from '@logto/schemas';
import { useTranslation } from 'react-i18next';

import FormCard from '@/components/FormCard';
import Button from '@/ds-components/Button';
import FormField from '@/ds-components/FormField';

import * as styles from './index.module.scss';

type Props = {
  currentTenantId: string;
  onClick: () => void;
};

function DeleteCard({ currentTenantId, onClick }: Props) {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });

  return (
    <FormCard title="tenant_settings.deletion_card.title">
      <FormField title="tenant_settings.deletion_card.tenant_deletion">
        <div className={styles.deletionButtonContainer}>
          <div className={styles.description}>
            {t('tenant_settings.deletion_card.tenant_deletion_description')}
          </div>
          <Button
            type="default"
            title="tenant_settings.deletion_card.tenant_deletion_button"
            disabled={[adminTenantId, defaultTenantId].includes(currentTenantId)}
            onClick={onClick}
          />
        </div>
      </FormField>
    </FormCard>
  );
}

export default DeleteCard;
