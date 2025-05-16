namespace Iftekhari.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCols_Translator_TblBook : DbMigration
    {
        public override void Up()
        {
            AddColumn("Iftekhari.Book", "Translator", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("Iftekhari.Book", "Translator");
        }
    }
}
