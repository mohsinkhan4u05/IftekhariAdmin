namespace Iftekhari.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addTblBook : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Iftekhari.Book",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        Author = c.String(),
                        ImagePath = c.String(),
                        Views = c.Int(nullable: false),
                        Rating = c.Decimal(precision: 18, scale: 2),
                        Tags = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("Iftekhari.Book");
        }
    }
}
