"""empty message

Revision ID: ad2db651b3ed
Revises: 4f6d24afa6db
Create Date: 2024-05-04 12:56:33.315813

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ad2db651b3ed'
down_revision: Union[str, None] = '4f6d24afa6db'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('Order', 'Code',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=255),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('Order', 'Code',
               existing_type=sa.String(length=255),
               type_=sa.INTEGER(),
               existing_nullable=False)
    # ### end Alembic commands ###
